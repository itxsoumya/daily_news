import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';

async function fetchRSSFeed(url) {
    try {
        const response = await axios.get(url);
        const text = response.data;

        // Parse the XML using fast-xml-parser
        const parser = new XMLParser({
            ignoreAttributes: false, // To keep attributes in the parsed object
            attributeNamePrefix: "", // Remove the prefix for easier access
        });
        const jsonObj = parser.parse(text);

        // Extract the desired data
        const items = jsonObj.rss.channel.item.map(item => {
            const mediaContent = item['media:content'] ? item['media:content'] : {};
            return {
                title: item.title,
                link: item.link,
                description: item.description,
                pubDate: item.pubDate,
                mediaUrl: mediaContent.url || null // Extract the media URL
            };
        });

        return items;

    } catch (error) {
        console.error("Error fetching or parsing RSS feed:", error);
    }
}

// Usage
const rssUrl = "https://www.thehindu.com/news/national/feeder/default.rss";
fetchRSSFeed(rssUrl).then(data => console.log(data));

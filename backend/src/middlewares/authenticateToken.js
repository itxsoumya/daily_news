import jwt from 'jsonwebtoken'
export const authenticateToken = (req, res, next)=> {
    const authHeader = req.headers['authorization'];
    
    const token = authHeader && authHeader.split(' ')[1];
    console.log('token' ,token)
    if (!token) return res.sendStatus(401).json({
        msg:'Invalid Token'
    });
    
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err){
            console.log(err)
        }
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

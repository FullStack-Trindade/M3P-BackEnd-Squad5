const permissionLevel = {
    "admin": 3,
    "medic": 2,
    "nurse": 1
}

function checkPermission(res, levelNecessary, next) {
    try {
        if (!res.locals.currentUser) throw new Error("usuário não autenticado");
        console.log(res.locals.currentUser);
        const userPermission = permissionLevel[res.locals.currentUser.type] || 0;
        if (userPermission < levelNecessary) throw new Error("não autorizado");
        next();
    } catch (err) {
        return res.status(401).send({ message: err.message });
    }
}


const admin = async (req, res ,next) => {
    checkPermission(res, 3, next);
}

const medic = async (req, res ,next) => {
    checkPermission(res, 2, next);
}

const nurse = async (req, res ,next) => {
    checkPermission(res, 1, next);
}

module.exports = {
    admin,
    medic,
    nurse
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRole = {
    viewer: "Viewer",
    admin: "Admin"
};
const canEdit = (role) => {
    if (role === userRole.viewer) { //viewer === viewer
        console.log("view");
    }
};
//# sourceMappingURL=asconst.js.map
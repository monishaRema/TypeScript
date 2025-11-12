"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRole = {
    viewer: "viewer",
    admin: "Admin"
};
const canEdit = (role) => {
    if (role === userRole.viewer) {
        console.log("view");
    }
};
//# sourceMappingURL=asconst.js.map
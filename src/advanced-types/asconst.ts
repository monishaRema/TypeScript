


const userRole = {
   viewer:"Viewer",
    admin:"Admin"
} as const;


const canEdit = (role:typeof userRole[keyof typeof userRole]) =>{
    if(role === userRole.viewer){ //viewer === viewer
        console.log("view")
    }
}
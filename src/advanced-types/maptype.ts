

// type arrOfString = {
//     height:string;
//     width:string;
// }

type arrOfNumber = {
    height:number;
    width:string;
    weight:boolean;

}


type areaOfString <T> = {
    [key in keyof T] : T[key]
    // height : T[height] // get value with string notion
}


const area:areaOfString <{
     height:number,
    width:string,
    weight:boolean,
}> = {
    height:12,
    width:"hello",
    weight:true,
}


const area2:areaOfString <{
     height:boolean,
    width:string,
    weight:boolean,
}> = {
    height:false,
    width:"hello",
    weight:true,
}





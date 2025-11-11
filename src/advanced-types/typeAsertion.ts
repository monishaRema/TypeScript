const kgToGMConvertor = (input:string | number) : string | number | undefined  => {
    if(typeof input === 'number'){
        return input * 1000

    }else if(typeof input === 'string'){
        let [value] = input.split(" ")
       return `Converted output is ${Number(value) * 1000} Gram`
    }   
}


const result1 = kgToGMConvertor(2) as number;
const result2 = kgToGMConvertor('3 kg') as string;


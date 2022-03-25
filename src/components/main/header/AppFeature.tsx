interface AppFeatureProps{
    title:string
    icon:any
    index:number
}
export const AppFeature=({title,icon,index}:AppFeatureProps)=>{
    const generateBorders=()=>{
        switch(index){
            case 1: return 'border-r  border-b '
            case 2: return 'border-b lg:border-r md:border-b '
            case 3: return 'border-r lg:border-r md:border-b'
        }
        
    }
    return(
        <div className={`${generateBorders()} py-4 px-3 sm:w-full h-40 flex flex-col justify-center items-center bg-white lg:border-b-0 md:border-b-0`}>
            <img src={icon} className="w-12 lg:w-16 md:w-16 mx-auto" alt="" />
            <h3 className="text-center text-gray-600 flex items-end justify-center text-sm lg:text-md md:text-sm pt-4">{title.toUpperCase()}</h3>
        </div>
    );
}
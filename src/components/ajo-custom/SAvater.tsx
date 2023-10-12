
export default function SAvater({src}:{src?:string}) {
  return (
       <div>
        <img className="w-10 h-10 rounded-full bg-cover" src={src??"/asset/img/ajo-avater.png"} />
      </div>
   );
}

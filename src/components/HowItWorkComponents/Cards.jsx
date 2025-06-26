
const Cards = ({title, description}) => {;

  return (
    <div className="
        bg-more-durk
        backdrop-blur-xl
        bg-gradient-to-br from-white/25 to white/5
        border border-white/20
        rounded-4xl
        p-8
        shawdow-2xl
        hover:shadow-3xl
        hover:bg-gradient-to-br hover:from-white/35 hover:to-white/10
        hover:scale-105
        hover:-translate-y-2
        transition-all 
        duration-400
        ease-out
        cursor-pointer
    ">
        <h3 className="text-background mb-6">{title}</h3>
        <p className="text-background mt-8">{description}</p>
    </div>
  )
}

export default Cards
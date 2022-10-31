

export const Link = ({title, link, id, description}) => {
        return (

                <div>
                        <a href={link} target="_blank" rel="noreferrer" id={id} className="block mx-5 md:mx-32 my-6 bg-[#EAECF0] hover:bg-[#d2d6e0] pt-[24px] pr-[32px] pb-[24px] pl-[32px] text-center rounded-md font-medium" title={description}>
                                {title} 
                        </a>
                </div>
        )
}
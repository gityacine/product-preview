
export default function Card() {
    
    return(
        <div className="flex sm:flex-row flex-col sm:w-[35rem] sm:h-[25rem] sm:mx-auto mx-4 my-7 shadow-md rounded-lg overflow-hidden group">
            <div className="sm:basis-1/2 overflow-hidden">
                <picture>
                    <source srcSet="/image-product-desktop.jpg" media="(min-width: 640px)"/>
                    <img className="object-cover w-full sm:h-full transition ease-in-out duration-1000 group-hover:scale-125" src="/image-product-mobile.jpg" alt="perfume-img" />
                </picture>
            </div>
            <div className="flex flex-col sm:basis-1/2 bg-white p-7 ">
                <p className="text-[#6c7289] uppercase font-montserrat text-xs font-medium tracking-[.3em]">Perfume</p>
                <h1 className="text-[#1c232b] font-fraunces font-bold text-3xl leading-8 mt-[18px]">Gabrielle Essence Eau De Parfum</h1>
                <p className="text-[#6c7289] font-montserrat text-[13px] font-medium mt-[18px]">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                <div className="flex items-center space-x-4 mt-[18px]">
                    <h1 className="text-[#3c8067] font-fraunces font-bold text-3xl">$149.99</h1>
                    <p className="text-[#6c7289] font-montserrat font-medium text-[13px] line-through">$169.99</p>
                </div>
                <button className="bg-[#3c8067] hover:bg-[#1c3b2a] active:bg-[#1c3b2a] flex items-center justify-center py-3 space-x-3 rounded-lg mt-[18px]">
                    <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF"/>
                    </svg>
                    <span className="text-white font-montserrat text-sm font-bold">Add to Cart</span>
                </button>
            </div>
        </div>
    );
}
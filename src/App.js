// - An Anchor tag  styled as a Button with an id **‘btn__zuri’** that redirects to “[https://training.zuri.team/](https://training.zuri.team/)”
// - An Anchor tag styled as a Button with an id **‘books’** that redirects to [http://books.zuri.team](http://books.zuri.team) with the title and a subtext describing that this is where you find books about design and coding
// - An Anchor tag styled as a Button with an id **‘book__python’** that redirects to to [https://books.zuri.team](https://books.zuri.team)/python-for-beginners?ref_id=<yourslackname>, with a subtext where you feature the book as if you were selling it.The reference id must be unique and will give you royalties if any sales of the book come
// - An Anchor tag styled as a Button with an id **‘pitch’** that redirects to to [https://background.zuri.team](https://background.zuri.team), with a subtext where you pitch a service for doing background checks on coders. Use a good, selling sentence.
// - An Anchor tag styled as a Button with an id **‘book__design’** that redirects to to [https://books.zuri.team/design-rules](https://books.zuri.team/design-rules) with a subtext where you pitch the free design book offered by Zuri.

import './index.css'

function App() {
        return (
                <div className="container w-full">
                        <header className='text-center'>
                        
                                <div className='relative'>
                                        <img className='border-2 p-3 rounded-full border-dashed absolute -bottom-24 right-80' src="../desktop_Icon.png" alt="navigate_back"  />
                                </div>
                                <img className='m-auto pt-20' id="profile__img" src="../profile__img.png" alt="profile__img" width={88} />
                                <h2 className='font-bold text-[20px] text-[#101828] pt-4'>Annette Black</h2>

                        </header>
                        <main>
                        
                        </main>
                        
                        <footer>
                        
                        </footer>
                </div>
        );
}

export default App;

import { Link } from './components/Link';
import './index.css'

function App() {

        let linksApi = [
                {title: 'Twitter Link', link: "https://training.zuri.team/", id : "btn__zuri"},
                {title: 'Zuri Team', link: "http://books.zuri.team", id : "books"},
                {title: 'Zuri Books', link: "https://books.zuri.team", id : "book_python"},
                {title: 'Python Books', link: "https://background.zuri.team", id : "pitch"},
                {title: 'Background Check for Coders', link: "https://books.zuri.team/design-rules", id : "Background"},
                {title: 'Design Books', link: "https://books.zuri.team/design-rules", id : "book__design"}
        ]

        const allLinks = linksApi.map(({title, link, id}) => (
                <Link title={title} link={link} id={id} key={id} />
        ))

        return (
                <div className="container w-full">
                        <header className='text-center'>
                        
                                <div className='relative'>
                                        <img className='border-2 p-3 rounded-full border-dashed absolute -bottom-24 right-80' src="../desktop_Icon.png" alt="navigate_back"  />
                                </div>
                                <img className='m-auto pt-20' id="profile__img" src="../profile__img.png" alt="profile__img" width={88} />
                                <h2 className='font-bold text-[20px] text-[#101828] pt-4'>Annette Black</h2>

                        </header>
                        <br />

                        <main className='mt-5'>

                                {allLinks}

                                <div className='pb-5 pt-0'>
                                        <span className='flex justify-center'>
                                                <img src="../slack.png" alt="ad" className='p-2' />
                                                <img src="../Social icon.png" alt="ad" className='p-2' />
                                        </span>
                                </div>
                        </main>
                        <br />
                        <br />
                        <br />
                        <footer className='block md:flex justify-between border-t-2 mx-24 pt-7 pb-10'>
                                
                                <img src="../Zuri.Internship_Logo.png" alt="zuri intenship logo" width="185px" />
                                <p className='text-[#667085] text-[16px]'>HNG Internship 9 Frontend Task</p>
                                <img src="../I4G.png" alt="I4G logo" />
                        
                        </footer>
                </div>
        );
}

export default App;

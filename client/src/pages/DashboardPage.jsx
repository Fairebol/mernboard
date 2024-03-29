import Analytics from '../components/Analytics'
import Aside from '../components/Aside'
import Charts from '../components/Charts'
import CountryCount from '../components/CountryCount'
import Navbar from '../components/Navbar'
import SourceButton from '../components/SourceButton'

export default function DashboardPage() {

    document.title = "Dashboard MERN"

    return (
        <div className="font-bold w-full h-full flex flex-row">
            <Aside  />

            <div className="w-full p-2 ">
                <div className="gap-x-4 gap-y-2 my-4 [&>*]:border-[1px] [&>*]:border-gray-600 [&>*]:rounded-md">
                    <Navbar />
                </div>
                <section className='flex flex-wrap '>
                    <Analytics 
                    images={['/img/Voxel-cube.webp',
                            '/img/Voxel-island_1.webp', 
                            '/img/Voxel-island_2.webp']}/>
                    <CountryCount />

                </section>
                

                <Charts></Charts>
            </div>


            <SourceButton />
            
        </div>
        
    )
}

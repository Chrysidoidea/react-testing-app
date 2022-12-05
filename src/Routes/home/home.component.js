import {Outlet} from 'react-router-dom';
import CharityElementsConstructorComponent
    from "../../components/charity-elements-constructor/charity-elements-constructor.component";

const Home = () => {

    const charityElements = [
        {
            id: 5,
            title: 'Animal Charity Evaluators',
            URL: 'https://animalcharityevaluators.org/',
            imageURL: 'http://phenomenalworld.in/wp-content/uploads/2014/04/D-deer-wildlifedearcritteranimalsbandipurforestjunglefreeroama-za2zpravsthroo-da-looking-glass-through-the-looking-glass-bangalore-blog-praveen.jpg',
            logoURL: 'https://animalcharityevaluators.org/wp-content/uploads/2016/10/ace-about-default-381x200.jpg',
            info: 'This organization are dedicated to finding and promoting the most effective ways to help animals. Learn more about our mission, vision, and goals as well as our history and organizational philosophy.',
        },
        {
            id: 1,
            title: 'Faunalytics',
            URL: 'https://faunalytics.org/',
            imageURL: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Tanzanian_Animals.jpg',
            logoURL: 'https://animalcharityevaluators.org/wp-content/uploads/2016/08/logo-faunalytics2400x2400.jpg',
            info: `Faunalytics is a U.S.-based organization working to connect animal advocates with information relevant to advocacy. This mostly involves cоnducting and publishing independent research, working directly with partner organizations on various research projects, and promoting existing research and data for individual advocates through their website’s content library. Faunalytics was one of our Standout Charities from December 2015 to November 2021.`
        },
        {
            id: 2,
            title: 'The Humane League',
            URL: 'https://thehumaneleague.org/',
            imageURL: 'https://davekochphoto.com/wp-content/uploads/2018/10/500_1601-Edit.jpg',
            logoURL: 'https://veganuary.com/wp-content/uploads/2020/09/the-humane-league-logo.jpg',
            info: 'The Humane League (THL) currently operates in the U.S., Mexico, the U.K., and Japan, where they work to improve animal welfare standards through grassroots campaigns, movement building, veg*n advocacy, research, and advocacy training, as well as through corporate, media, and community outreach. They work to build the animal advocacy movement internationally through the Open Wing Alliance (OWA), a coalition founded by THL whose mission is to end the use of battery cages globally. THL has been an ACE Top Charity since August 2012',
        },
        {
            id: 3,
            title: 'Wild Animal Initiative',
            URL: 'https://www.wildanimalinitiative.org/',
            imageURL: 'https://wildlifelawafrica.com/wp-content/uploads/2018/10/Uganda-40-e1356623596478.jpg',
            logoURL: 'https://www.wildlifeinitiative.org/wp-content/uploads/2021/03/logo-1024x683.jpg',
            info: 'Wild Animal Initiative (WAI) currently operates in the U.S., where they work to strengthen the animal advocacy movement through creating an academic field dedicated to wild animal welfare. They compile literature reviews, write theoretical and opinion articles, and publish research results on their website and/or in peer-reviewed journals. WAI focuses on identifying and sharing possible research avenues and connecting with more established fields. They also work with researchers from various academic and non-academic institutions to identify potential collaborators, and they recently launched a grant assistance program. Wild Animal Initiative has been one of ACE’s Top Charities since November 2020.',
        },
        {
            id: 4,
            title: 'Mercy For Animals',
            URL: 'https://mercyforanimals.org/',
            imageURL: 'https://live.staticflickr.com/65535/47570229402_5a318f6a08.jpg',
            logoURL: 'https://recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/000/004/993/original/MFA_LOGO.png?1570045885',
            info: '\n' +
                '\n' +
                'Our mission is to end industrial animal agriculture by constructing a just and sustainable food system.\n' +
                '\n' +
                'Imagine a world free of cruelty, a world in which we nurture our bodies, minds, and spirits with wholesome, healthy food that is kind to animals and sustainable for our planet. Mercy For Animals believes that world is possible. In fact, it is inevitable if we work together to elevate humanity to its fullest potential.\n',
        },
        {
            id: 5,
            title: 'New Harvest',
            URL: 'https://new-harvest.org/',
            imageURL: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Otvane_Wildlife_Animal_12.JPG',
            logoURL: 'https://new-harvest.org/app/uploads/2021/03/new-harvest-logo-thumbnail-2.png',
            info: 'New Harvest is a nonprofit research institute that supports open, public cultured meat research. Founded in 2004, we are the world’s longest-running organization dedicated to advancing the field of cellular agriculture.',
        },

    ]

    return (
        <div>
            <Outlet/>
            <CharityElementsConstructorComponent charityElements={charityElements}/>
        </div>
    )
}

export default Home;

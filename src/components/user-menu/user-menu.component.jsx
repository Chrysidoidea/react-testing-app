import {useSelector} from "react-redux";
import {useEffect} from "react";

import SignOutButton from "./sign-out/sign-out.component";
import AnimationComponent from "../../effects/Animation.component";
import {
    Author, FirstLetter,
    UserMenu,
    UserMenuSector

} from "./user-menu.styles"

const UserMenuComponent = () => {
    const userName = useSelector(state => state.user.currentUser.displayName)

    useEffect(() => {
        console.log(userName)
    }, []);

    return (
        <AnimationComponent>
            <UserMenuSector>
                <UserMenu>
                    <h2>Welcome, {userName}!</h2>
                    <h3>Thank you for joining my "Hello World" project.</h3>
                    <p>As a token of appreciation, please enjoy this short story.</p>
                    <p>I hope you like it!</p>
                    <span>      <FirstLetter>O</FirstLetter>nce upon a time, in a small town nestled between rolling hills and a crystal-clear lake, lived a young girl named Amelia. Growing up, Amelia was always curious about the world around her. She spent her days exploring the nearby woods, observing the plants and animals, and asking her parents countless questions about the mysteries of life.

Amelia's parents were loving and supportive but could only offer so much in terms of answers. <br/>       As Amelia grew older, her thirst for knowledge only intensified. She would often visit the town library, but even there, she found the resources limited. The small town was not known for its scientific community, and Amelia found it difficult to satisfy her curiosity.

One day, Amelia discovered a dusty old book hidden away in the back corner of the library. The title, "The Wonders of Science," immediately caught her attention. As she flipped through the pages, her eyes widened with excitement. It was a treasure trove of scientific wonders, exploring everything from the smallest atoms to the vast cosmos.

The more Amelia read, the more her love for science grew. She became determined to bring the wonders of science to her small town. She started by organizing a science fair at her school, encouraging her classmates to conduct experiments and present their findings. The event was a huge success and attracted the attention of the entire town.

Inspired by the enthusiasm of the townspeople, Amelia decided to take her efforts a step further. She began writing letters to scientists, sharing her love of science and asking for their guidance. To her surprise, she received replies from several renowned scientists who offered their support and encouragement.

With their help, Amelia started a local science club, and soon, the small town became a hub of scientific exploration. Children and adults alike flocked to the club, eager to learn about the world and conduct experiments. The local economy flourished as people began to innovate and create new technologies.

<br/>       As the years passed, the town's residents started to realize the profound impact science had on their lives. They saw the benefits of clean energy, how advances in medicine improved their health, and how technology connected them with the rest of the world.

One particular summer, a terrible drought struck the region. The once-lush hills turned brown, and the lake"s water level dropped dangerously low. The town"s farmers were in despair, as their crops withered and died. The townspeople began to lose hope.

Amelia knew that science could offer a solution. She gathered her fellow science club members and began researching ways to combat the drought. After weeks of hard work, they discovered a water-saving irrigation technique that could help the crops survive with minimal water.

Amelia and her team presented their findings to the town, and together they implemented the new irrigation system. To everyone's astonishment, the crops began to thrive, and the town was saved from the brink of disaster.

News of Amelia's success spread far and wide. She was invited to speak at conferences and share her knowledge with others. People from all over the world sought her advice, and Amelia became a symbol of hope and inspiration for those who believed in the power of science.

<br/>       As Amelia grew older, she continued to spread her love for science. She established scholarships for students pursuing scientific careers and founded a research institute in her hometown, which became a global center for scientific innovation.

Amelia's impact on the world was immense, but it all started with her love for science and her desire to share that passion with others. Her story is a testament to the transformative power of science and the importance of nurturing curiosity and knowledge.

Through Amelia's journey, we are reminded of the vital role science plays in our lives. It provides us with the tools to understand the world around us, solve problems, and improve our quality of life. Science is not just a subject in school, it is a driving force that shapes our society, our environment, and our future.

<br/>       Amelia's legacy lives on in the generations of scientists, innovators, and dreamers who continue to push the boundaries of human knowledge. They tackle global challenges like climate change, pandemics, and resource scarcity, all in the pursuit of a better world for us and the generations to come.

For those who may not yet love science, let Amelia's story serve as a reminder of its immense power and beauty. From the tiniest microorganisms to the vastness of the universe, science helps us unravel the mysteries of our existence and our place in the cosmos. It is an ever-evolving story that connects us all, transcending borders and cultural differences.

<br/>       So, let us all embrace the wonder of science and become advocates for its importance in our lives. Let us foster curiosity in our children, support scientific research and education, and celebrate the achievements of those who dedicate their lives to expanding our understanding of the world around us.

In the end, Amelia's story is not just about her love for science; it is a story about hope, determination, and the incredible potential that lies within each of us. It is a story that reminds us that, through science, we can shape our destiny and create a brighter, more sustainable future for all.
                    </span>
                    <Author>An Anonymous Author</Author>


                </UserMenu>
                <SignOutButton/>
            </UserMenuSector>
        </AnimationComponent>
    )
}
export default UserMenuComponent;
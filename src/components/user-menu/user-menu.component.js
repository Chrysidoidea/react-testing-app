import './user-menu.component.scss';
import AnimationEffectComponent from "../../effects/animation-effect.component";
import SignOutButton from "../sign-out/sign-out.component";


const UserMenuComponent = () => {


    return (
       <AnimationEffectComponent>
        <div className='user-menu'>
        <h2>Greetings, u have registered in my "Hello World" project</h2>
            <h3>You deserved receive the answer of Ultimate Question</h3>
            <span>The Ultimate Question is the actual inquiry behind the Ultimate Answer to Life, The Universe, and Everything. The Ultimate Question was sought after the supercomputer Deep Thought revealed the Ultimate Answer to be 42. When Deep Thought asked, Loonquawl and Phouchg were unable to say what the actual question was.

Hence, Deep Thought made the plans for the supercomputer Earth, that would solve the Question in ten million years. However, five minutes before it was due to be complete, the Vogons, under the orders of Gag Halfrunt, destroyed it to make a hyperspace bypass.

It was later revealed that part of the Earth supercomputer was compromised by the Golgafrinchans, whose arrival wiped out the population of humans on the planet. </span>
            <SignOutButton/>
        </div>

       </AnimationEffectComponent>
    )
}


export default UserMenuComponent;
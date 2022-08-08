import emojiHand from '../assets/emojis/hand-emoji.png'
import emojiManPC from '../assets/emojis/man-pc.png'

export function Home() {
    return <section className="w-full pt-[260px]">
        <h1 className='text-2xl'>
            <span className='relative'>Hi!
                <img className='absolute -top-1 left-[34px] w-8 h-8' src={emojiHand} alt="" />
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— My name is <span className='text-link'>Erick</span> I'm a <span className='text-link'>FullStack</span> <br />
            <span className='relative'><span className='text-link'>developer</span>
                <img className='absolute -top-1 -right-9 w-8 h-8' src={emojiManPC} alt="" />
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;located in Praia Grande, SP.

        </h1>
        <h2 className="mt-4">
            Currently focused on Node, React and Typescript. <br />
            Developer with professional experience in Flutter, Firebase and React.
        </h2>
    </section>
}
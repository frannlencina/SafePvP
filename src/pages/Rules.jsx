import React from 'react'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

function Rules() {
  return (
    <>
      <div className='rulesContainer pb-24'>
        <Navbar />
        <div className="rulesContainerJr rounded-lg text-white p-10 w-4/5 mt-16 mx-auto" >
          <div className="title flex justify-center m-3">
            <div className="bg-main-rose text-center w-48 rounded-lg cursor-pointer p-1 mb-10">
              <h2 className='font-bold text-4xl'>RULES</h2>
            </div>
          </div>
          <div className="section__general">
            <div className="general__title ml-5 mb-5">
              <h4 className=' text-3xl font-bold'>GENERAL</h4>
            </div>
            <div className="general__info text-xl">
              <p>1. <span className='font-bold'>Do NOT</span> post videos that are unrelated to SafePvP. This means that a majority of the video you are posting has to be about SafePvP.</p>
              <p>2. <span className='font-bold'>Do NOT</span> be racist. You will be punished for this.</p>
              <p>3. <span className='font-bold'>Do NOT</span> use a VPN or a hotspot (internet from your phone).</p>
              <p>4. <span className='font-bold'>Do NOT</span> exploit bugs or glitches.</p>
              <p>5. <span className='font-bold'>Do NOT</span> advertise other servers.</p>
              <p>6. <span className='font-bold'>Do NOT</span> post links to screamers, shock sites, or sites containing pornographic content.</p>
              <p>7. <span className='font-bold'>Do NOT</span> suicide/self-harm jokes or provoke suicide/self-harm.</p>
              <p>8. <span className='font-bold'>Do NOT</span> use an objectionable Minecraft username. If your username is perceived as harmful, hateful, racist, obscene, or otherwise</p>
              <p>9. <span className='font-bold'>Do NOT</span> Hackusate. If you think somebody is cheating, use /report.</p>
              <p>10. <span className='font-bold'>Do NOT</span> evade a ban or a mute. Doing this may result in a blacklist. To appeal a ban/mute, visit https://safepvp.us/tickets</p>
              <p>11. <span className='font-bold'>Do NOT</span> play with players who are ban evading. If you are caught, you too will be banned.</p>
              <p>12. <span className='font-bold'>Do NOT</span> grief or excessively harass famous players. Doing this will result in a warning, followed by a ban.</p>
              <p>13. <span className='font-bold'>Do NOT</span> stream-snipe, harass, excessively follow, or excessively trap famous players for unreasonable periods of time. Doing this will result</p>
              <p>14. Keep forum posts on topic & follow all in-game chat rules on the forums. Anything related to other servers (recruitment posts, videos, etc) should be posted on their website, not ours.</p>
              <p>15. <span className='font-bold'>Do NOT</span> be an asshole. If you are one, you will be removed from the network; use common sense.</p>
              <p>16. Solicitation is <span className='font-bold'>Do NOT</span> allowed. Selling of accounts, in-game items, or specific services in-game via message or chat is <span className='font-bold'>Do NOT</span> allowed.</p>
            </div>
          </div>
          <div className="section__hcf">
            <div className="hcf__title ml-5 my-10">
              <h4 className='text-3xl font-bold'>HCF & KITMAP</h4>
            </div>
            <div className="hcf__info text-xl">
              <p>1. <span className='font-bold'>Do NOT</span> attempt to avoid force invites. Any player or faction who attempts to find a loophole in the force invite rule will be removed from the network. This includes but is not limited to: using an alternate account to not use a force invite, disband a faction and reclaim for force invites to reset, make a second faction to have full force invites, ally with members who cannot join the faction because they have been cycled, etc.</p>
              <p>2. <span className='font-bold'>Do NOT</span> ally. Allying is not allowed. This includes but is not limited to: letting players in your base save them from another faction, fighting with anyone who is not in your faction. This is a simple rule, and anyone who tries to find loopholes in it will be banned.</p>
              <p>3. Insiding your faction is not allowed. This includes taking items, making your faction raidable on purpose, or anything in-between. If you want to leave your faction peacefully you may do so by asking your faction leader to take the items you worked for. Please contact an admin if you're not sure your actions are considered insiding.</p>
              <p>4. <span className='font-bold'>Do NOT</span> excessively grief. Excessively griefing a faction will result in a ban and the faction who was griefed will have it removed. In other words, you will waste your time and get yourself banned.</p>
              <p>5. <span className='font-bold'>Do NOT</span> portal trap. Trapping nether portals will result in a ban.</p>
              <p>6. <span className='font-bold'>Do NOT</span>. Using an alternate account is not permitted under any circumstances unless approved by a head staff member.</p>
              <p>7. <span className='font-bold'>Do NOT</span> block glitch. Block glitching will result in a ban. This includes but is not limited to: pearl glitching through a block, hitting players through blocks, using minecarts by breaking blocks in another faction's claim.</p>
              <p>8. <span className='font-bold'>Do NOT</span> DTR evade. Kicking a player or leaving a faction to avoid DTR loss is not permitted. The nature of the death that would have occurred is irrelevant. It does not matter if the player who is kicked (or leaves) was tagged, in lava, in combat, etc. Kicking or leaving to avoid DTR loss in any circumstance is not permitted. You may not leave your faction to knock, jump in string traps, or any other reasonably risky activity that would otherwise result in DTR loss.</p>
              <p>9. <span className='font-bold'>Do NOT</span> have objectional faction names. If a faction name is perceived as harmful, hateful, racist, obscene, or otherwise objectionable, your team name will be forcibly changed and the leader will receive a punishment.</p>
              <p>10. <span className='font-bold'>Do NOT</span> keep players hostage. Purposely doing this will result in a warning, followed by a ban.</p>
              <p>11. <span className='font-bold'>Do NOT</span> truce during the EOTW FFA.</p>
              <p>12. "Spectators" who watch fights just to break Totems will be banned</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-main-black p-10'>
        <Footer />
      </div>
    </>
  )
}

export default Rules
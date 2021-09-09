import IMG1 from '../../images/post-img-1.png'
import MessageForm from '../message-form'

export default function Post () {
  return (
    <div className="post">
      <div className="post__hero">
        <h1>ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER</h1>
        <h2>Transactions</h2>
        <h5><span>19 JUNE, 2019</span>BUSINESS</h5>
      </div>

      <div className="post__content">
        <div>
          <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>

          <p>Planning Your Luxury Trip </p>

          <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>

          <p>The next part of planning is to determine your starting and ending ports. This could be a place close to home and sail in one area or start and finish at two different ports. Generally, starting and stopping in the same port will save you money and is usually more convenient. You can also fly to a destination far from home and then sail another exotic sea. There are luxury yacht charter companies that cruise the Caribbean and Mediterranean seas or around Alaska, the Panama Canal, or anyplace you can imagine.</p>

          <p>Determining the type of cruise is another aspect of planning a chartered yachting trip. You can have as little or many crew members as the ship will hold. A captain takes all the worries out of navigating and onboard housekeeping services make it a real vacation that rivals the finest hotel services. You can also choose to have a chef and service crew as part of your vacation package.</p>
        </div>

        <div>
          <span>    
            <p>If you like the idea of knowing what it is really like to sail, but don’t want to risk safety, you can charter a sailing cruise that puts you in the role of deck hand. A competent crew will direct you as to your “chores” for keeping the ship in top shape and on course. </p>

            <p>Destinations & Ports of important Charter Companies  One of the greatest benefits of choosing a chartered cruise as a vacation is the choice. You will most likely have a rough itinerary and that can be affected by weather. However, you are flexible in deciding how long you want to stay in a particular port and if you want to add or subtract stops along the way.</p>
          </span>

          <strong>
            <img src={IMG1} alt="content" />
          </strong>
        </div>

        <div>
          <p>Your yacht is your hotel that travels with you. There is only one flight and one hotel to book! Then you take all of your luggage and unpack it just once to enjoy several days of new destinations.</p>

          <p>If you have never experienced cruising before, a chartered experience is a great way to get your feet wet. It is different from cruise lines with thousands of guests because the people on your ship will be your friends and family. The personal touches of a chartered trip will help you develop your love for the sea with all the best benefits of commercial cruises.</p>
        </div>
      </div>

      <div className="post__social">
        <p className="post__tag">Tags: Business, Capital, Finance</p>
        <p className="post__media">
          Share with
        </p>
      </div>

      <div className="post__contact">
        <h2>Leave A Comment</h2>
        <p>Your email address will not be published. Required fields are marked *</p>
        <MessageForm />
      </div>
    </div>
  )
}
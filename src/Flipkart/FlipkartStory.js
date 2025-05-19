import React from "react";
import FLipkartStories from "./FLipkartStories";
const FlipkartStory = () => {
  const Searched = [
    { text: "CMF Phone 2Pro" },
    { text: "Flipkart Sale" },
    { text: "Online sale offers & deals" },
    { text: "Google Pixels 9A" },
    { text: "SAMSUNG F16" },
    { text: "Mobile " },
    { text: "POCO M7" },
    { text: "Nothing Phone 3a" },
    { text: "Iphone 16e" },
    { text: "SAMSUNG Galaxy S25 Ultra" },
    { text: "SAMSUNG Galaxy S25" },
    { text: "iphone 16" },
    { text: "iphone 16 Plus" },
    { text: "iphone 16 pro " },
    { text: "iphone 16 pro Max" },
    { text: "vivo V50" },
    { text: "OPPO Reno 13 pro" },
    { text: "POCO X7" },
    { text: "realme 14 pro plus" },
    { text: "REDMI Note 14 pro+" },
    { text: "" },
    { text: "Whoop Band" },
    { text: "OPPO Find X8" },
    { text: "Flipkart Minutes" },
    { text: "Flipkart Exchange" },
    { text: "Flipkart Reset" },
    { text: "Nothing Phone 2a Plus" },
    { text: "Sares" },
    { text: "CMF by Nothing Phone 1" },
    { text: "Pocket Bazar" },
    { text: "Xiaomi 14 CIVI" },
    { text: "Infinix Note 40 Pro 5G" },
    { text: " iPhone 15" },
    { text: "Infinix Note 40 5G" },
    { text: "iPhone 15 Plus" },
    { text: "vivo X Fold3 Pro" },
    { text: "Motarola g04s" },
    { text: "Vivo x 100" },
    { text: "onePlus Nord 3 Lite Plus" },
    { text: "SAMSUNG Flip5" },
    { text: "SAMSUNG Fold5" },
    { text: "Flipkart Axis Bank Super Elite Credit Card" },
    { text: "5G Mobile Phones" },
    { text: "Moto Edge 40" },
    { text: "Grievance Redressal" },
    { text: "Help Center" },
    { text: "Track Orders" },
    { text: "Manage Orders" },
    { text: "Return Orders" },
    { text: "Gift Cards Store" },
    { text: "Flipkart Axis Bank Credit Card" },
  ];
  const Mobiles = [
    { text: "Motarola g64 5G" },
    { text: "OPPO Reno 12" },
    { text: "Motarola Edge 50 Fusion" },
    { text: "REWDMI 12 5G" },
    { text: "REDMI Note 13 5G" },
    { text: "Realme 12+ 5G" },
    { text: "POCO C65" },
    { text: "Motarola g84" },
    { text: "Realme C53" },
    { text: "Infinix Smart 8" },
    { text: "SAMSUNG Galaxy S23 5G" },
    { text: "SAMSUNG Galaxy S21 FE 5G Qualcomm" },
    { text: "vivo V30" },
    { text: "Samsung Galaxy S24 5G" },
    { text: "Samsung Galaxy S24+ 5G" },
    { text: "iPhone 12 64GB" },
    { text: "iPhone 12 Pro 512GB" },
    { text: "iPhone 12 128GB" },
    { text: "SAMSUNG Galaxy S21 FE 5G" },
    { text: "Infinix HOT 30i" },
    { text: "Realme 10 Pro 5G" },
    { text: "REDMI Note 12 Pro 5G" },
    { text: "Motarola 5g Phone" },
    { text: "Realme 5g Smartphone" },
    { text: "Apple 5g Phone" },
    { text: "Iqoo 5g Phones" },
    { text: "Oneplus 5g Phones " },
    { text: "Vivo 5g Phones" },
    { text: "OPPO 5g Smart Phones" },
    { text: "4G Mobile" },
    { text: "Nokia Phone" },
    { text: "Samsung Mobile" },
    { text: "iphone" },
    { text: "OPPO Mobile" },
    { text: "Vivo Mobile" },
  ];
  const Camera = [
    { text: "GoPro Action Camera" },
    { text: "Nikon Camera" },
    { text: "Canon Camera" },
    { text: "Sony Camera" },
    { text: "Canon DSLR" },
    { text: "Nikon DSLR" },
  ];
  const Laptops = [
    { text: "Asus ROG Ally" },
    { text: "MacBook Pro M2" },
    { text: "Premium Laptop" },
    { text: "Asus ROG Strix SCAR 16 (2023) Core i9 13th Gen" },
    { text: "Asus ROG Zephyrus M16 (2023) Core i9 13th Gen" },
    { text: "Asus ROG ZenBook 14 OLED (2022)" },
    { text: "Realme Book Prime Core i5 11th Gen " },
    { text: "Microsoft Surface Go Premium 128GB" },
    { text: "Apple Laptops" },
    { text: "Acer Laptops" },
    { text: "Lenovo Laptops" },
    { text: "Dell Laptops" },
    { text: "Asus Laptops" },
    { text: "HP Laptops" },
    { text: "Gaming Laptops" },
    { text: "2 in 1 Laptops" },
    { text: "Laptops" },
    { text: "Dell Latest Laptops 2022" },
    { text: "HP Latest Laptops 2022" },
    { text: "Infinix iBook Y1 Plus" },
    { text: "SAMSUNG Galaxy Book3" },
    { text: "12th Gen Intel Core Laptops" },
  ];
  const TVS = [
    { text: "TV" },
    { text: "LG TV" },
    { text: "Sony TV" },
    { text: "Samsung TV" },
    { text: "TCL TV" },
    { text: "TV" },
    { text: "TV" },
    ,
    { text: "Mi TV" },
    { text: "Panasonics TV" },
    { text: "OnePlus TV" },
    { text: "Iffalcon TV" },
    { text: "32 Inch TV" },
    { text: "40 Inch TV" },
    { text: "43 Inch TV" },
    { text: "50 Inch TV" },
    { text: "55 Inch TV" },
    { text: "65 Inch TV" },
    { text: " 75 Inch TV" },
    { text: "LED TV" },
    { text: " OLED TV" },
    { text: "QLED TV" },
  ];
  const LargeApplicance = [
    { text: "Televison" },
    { text: "Washing Machine" },
    { text: "Refrigerator" },
    { text: "Air Conditioner" },
    { text: "Electric Cookers" },
    { text: "Electric Jug(Heater) / Tracel Design" },
    { text: "Induction Cooktops" },
    { text: "Inverter / Stabilizer" },
    { text: "Irons / Iron Box" },
    { text: "Mixer" },
    { text: "Grinder Jucier" },
    { text: "Wet Grinders" },
    { text: "Chimneys" },
    { text: "Microwave Ovens" },
    { text: "Vacuum Cleaners" },
    { text: "Water Purifier" },
    { text: "Fan" },
  ];
  const Clothing = [
    { text: "Sarees" },
    { text: "Green Bridal lehenga" },
    { text: "Tops" },
    { text: "Apron for Doctors" },
    { text: "Shoes" },
    { text: "Sunglasses" },
    { text: "Bridal Blouse" },
    { text: "Half saree blouse Design" },
    { text: "Designer blouses" },
    { text: "Lavender Saree" },
    { text: "Blouse design" },
    { text: "Shirts" },
    { text: "Cotton saree blouse design" },
    { text: "T shirts" },
    { text: "Jeans" },
    { text: "Dresses" },
    { text: "One piece" },
    { text: "Groom weddingsherwani" },
    { text: "Designer Salwar Suits" },
    { text: "Bra" },
    { text: "Cotton simple blouse designs" },
    { text: "Banarasi saree blouse designs" },
    { text: "Stylish blouse astin design" },
    { text: "Track pant" },
    { text: "Blouse neck design" },
    { text: "Mens Kurtas" },
    { text: "Party Dresses" },
    { text: "Plazzo Suits" },
    { text: "Anarkali" },
    { text: "Gowns" },
    { text: "Cut out dress" },
    { text: "Salwar Suits" },
    { text: "Kurtis" },
    { text: "Designer Sarees" },
    { text: "Leggings" },
    { text: "Shorts" },
    { text: "Georgette Sarees" },
    { text: "Ethnic Wear" },
    { text: "uppada pattu sarees" },
    { text: "Blouse back design" },
    { text: "Jodhpur pants" },
  ];
  const Footwear = [
    { text: "Adidas Shoes" },
    { text: "Reebok Shoes " },
    { text: "Nike Shoes" },
    { text: "Puma Shoes" },
    { text: "Boots" },
    { text: "Bata Shoes" },
    { text: "Crocs" },
    { text: "Woodland Shoes" },
    { text: "Skechers Shoes" },
    { text: "Sneakers" },
    { text: "Womens Boots" },
    { text: "Sports Shoes" },
    { text: "Loafers" },
    { text: "Sndals" },
    { text: "Lotto Sports Shoes" },
    { text: "Casual Shoes " },
    { text: "Womens Sketcher Shoes" },
    { text: "Asics Sports Shoes" },
    { text: "Formal Shoes" },
    { text: "School Shoes" },
  ];
  const Groceries = [
    { text: "PhonePe Grocery Vouncher" },
    { text: "Hand Wash" },
    { text: "Soap" },
    { text: "Cashew Nuts" },
    { text: "Sunflower Oil" },
    { text: "Eggs" },
    { text: "Toilet Cleaner" },
    { text: "Harpic Toilet Cleaner" },
    { text: "Detol Soap" },
    { text: "Mustard Oil" },
    { text: "Biscuit" },
    { text: "Chesse" },
    { text: "Patanjli Atta" },
    { text: "Fortune Oil" },
    { text: "Aashrivaad Atta" },
    { text: "Tea" },
  ];
  const Best = [
    { text: "Headphones" },
    { text: "Best Gas Geyser" },
    { text: "Kitchen Geyser" },
    { text: "Nutri Blender" },
    { text: "Portable Air Cooler" },
    { text: "Best Air Cooler" },
    { text: "Bags" },
    { text: "Hitachi Refrigerator 3 Door" },
    { text: "Books" },
    { text: "Toys" },
    { text: "Helmets" },
    { text: "Wall Ckocks" },
    { text: "Baby Food " },
    { text: "Chocolate" },
    { text: "Calculator" },
    { text: "Cycles" },
    { text: "Lipsticks" },
    { text: "Mask" },
    { text: "Vertiv UPS" },
    { text: "Fastrack Watches" },
    { text: "Wallets" },
    { text: "Earings" },
    { text: "Gold Coin" },
    { text: "Realme Pad Mini " },
    { text: "HandBags" },
    { text: "conketSW2 Smartwatch" },
    { text: "Mivi DuoPods a350" },
    { text: "Speaker Cleaner" },
  ];
  const Furniture = [
    { text: "Furniture" },
    { text: "Sofa" },
    { text: "Beds" },
    { text: "Dining sets" },
    { text: "Wardrobes" },
    { text: "Mattresses" },
    { text: "TV Units" },
    { text: "Tables" },
    { text: "Chairs" },
    { text: "Shelves" },
    { text: "Bean Bags" },
    { text: "Office Chairs" },
    { text: "Computer Table" },
    { text: "Office Tables" },
    { text: "Red Sofa" },
    { text: "Waketfit Bads" },
    { text: "White Beds" },
    { text: "White Sofa" },
    { text: "Wakefit Mattress" },
    { text: "Green Sofa" },
    { text: "Black Sofa" },
    { text: "Brown Sofa" },
  ];
  const BGMH = [
    { text: "Shampoo" },
    { text: "Whey Protein" },
    { text: "Homeopathy" },
    { text: "Cricket" },
    { text: "Cycles" },
    { text: "Footballs" },
    { text: "Treadmills" },
    { text: "Christmas Gifts" },
    { text: "Fitness Accessories" },
    { text: "Online Guitar" },
    { text: "Books Store" },
    { text: "Musical Instrument Store" },
    { text: "Dabur Chyawanprash" },
    { text: "Baidyanath Chyawanprash" },
    { text: "Energy Drinks" },
    { text: "Toys" },
    { text: "Milk Drink Mixes" },
    { text: "Chyawanprash" },
    { text: "Indian Flag" },
    { text: "Protein Supplements" },
  ];

  return (
    <div className="pl-10 bg-[#f5f5f5]  text-[#555555] pb-14">
      <div className="pb-10">
      <h1 className="text-lg font-semibold  py-3 pb-4 text-[#333333]">
        Top Stories : Brand Directory
      </h1>
      <div className="">
        <span className="text-sm font-medium">
          MOST SEARCHED FOE AN FLIPKART{" "}
        </span>
        :{" "}
        {Searched.map((item, index) => (
          <span
            key={index}
            className="px-[5px] border-r-[1px] border-r-gray-600 text-xs font-medium "
          >
            {item.text}
          </span>
        ))}
      </div>
      <div className="">
        <span className="text-sm font-medium">MOBILES </span>:{" "}
        {Mobiles.map((item, index) => (
          <span
            key={index}
            className="px-[5px] border-r-[1px] border-r-gray-600 text-xs font-medium "
          >
            {item.text}
          </span>
        ))}
      </div>
      <div className="">
        <span className="text-sm font-medium">CAMERA </span>:{" "}
        {Camera.map((item, index) => (
          <span
            key={index}
            className="px-[5px] border-r-[1px] border-r-gray-600 text-xs font-medium "
          >
            {item.text}
          </span>
        ))}
      </div>
      <div className="">
        <span className="text-sm font-medium">LAPTOPS </span>:{" "}
        {Laptops.map((item, index) => (
          <span
            key={index}
            className="px-[5px] border-r-[1px] border-r-gray-600 text-xs font-medium "
          >
            {item.text}
          </span>
        ))}
      </div>
      <div className="">
        <span className="text-sm font-medium">TVS </span>:{" "}
        {TVS.map((item, index) => (
          <span
            key={index}
            className="px-[5px] border-r-[1px] border-r-gray-600 text-xs font-medium "
          >
            {item.text}
          </span>
        ))}
      </div>
      <div className="">
        <span className="text-sm font-medium">LARGE APPLANCES </span>:{" "}
        {LargeApplicance.map((item, index) => (
          <span
            key={index}
            className="px-[5px] border-r-[1px] border-r-gray-600 text-xs font-medium "
          >
            {item.text}
          </span>
        ))}
      </div>
      <div className="">
        <span className="text-sm font-medium">CLOTHING</span>:{" "}
        {Clothing.map((item, index) => (
          <span
            key={index}
            className="px-[5px] border-r-[1px] border-r-gray-600 text-xs font-medium "
          >
            {item.text}
          </span>
        ))}
      </div>
      <div className="">
        <span className="text-sm font-medium">FOOTWEAR </span>:{" "}
        {Footwear.map((item, index) => (
          <span
            key={index}
            className="px-[5px] border-r-[1px] border-r-gray-600 text-xs font-medium "
          >
            {item.text}
          </span>
        ))}
      </div>
      <div className="">
        <span className="text-sm font-medium">GROCERIES </span>:{" "}
        {Groceries.map((item, index) => (
          <span
            key={index}
            className="px-[5px] border-r-[1px] border-r-gray-600 text-xs font-medium "
          >
            {item.text}
          </span>
        ))}
      </div>
      <div className="">
        <span className="text-sm font-medium">BEST SELLING ON FLIPKART</span>:{" "}
        {Best.map((item, index) => (
          <span
            key={index}
            className="px-[5px] border-r-[1px] border-r-gray-600 text-xs font-medium "
          >
            {item.text}
          </span>
        ))}
      </div>
      <div className="">
        <span className="text-sm font-medium">FURNITURE</span>:{" "}
        {Furniture.map((item, index) => (
          <span
            key={index}
            className="px-[5px] border-r-[1px] border-r-gray-600 text-xs font-medium "
          >
            {item.text}
          </span>
        ))}
      </div>
      <div className="">
        <span className="text-sm font-medium">BGMH</span>:{" "}
        {BGMH.map((item, index) => (
          <span
            key={index}
            className="px-[5px] border-r-[1px] border-r-gray-600 text-xs font-medium "
          >
            {item.text}
          </span>
        ))}
      </div>
       </div> 

      <div className="text-sm text-[#9c9c9c] pt-5 ">
        <div>
          <h1 className="text-xl font-semibold text-[#8c8c8c] pb-2">Flipkart: The One-Stop Shopping Destination</h1>
          <p className="pt-1 pb-3 pr-1">
            E-commerce is revolutionizing the way we all shop in India. Why do
            you want to hop from one store to another in search of the latest
            phone when you can find it on the Internet in a single click? Not mobile
            Flipkart houses everything you can possibly imagine, from trending
            electronics like laptops, tablets, smartphones, and mobile
            accessories to in-vogue fashion staples like shoes, clothing and
            lifesty from modern furniture like sofa sets, dining tables, and
            wardrobes to appliances that make your life easy like washing
            machines, TVs, ACs, mixer grinder juicers and other time-saving
            kitchen and s from home furnishings like cushion covers, mattresses
            and bedsheets to toys and musical instruments, we got them all
            covered. You name it, and you can stay assured about finding them
            all here. with erratic working hours, Flipkart is your best bet.
            Shop in your PJs, at night or in the wee hours of the morning. This
            e-commerce never shuts down.
          </p>
          <p className=" pt-1 pb-3">
            What's more, with our year-round shopping festivals and events, our
            prices are irresistible. We're sure you'll find yourself picking up
            more than what you had in mind. If you are wondering why you
            Flipkart when there are multiple options available to you, well, the
            below will answer your question
          </p>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-[#8c8c8c] pb-2 pt-1 ">Flipkart Plus</h1>
          <p className="pb-3">
            A world of limitless possibilities awaits you - Flipkart Plus was
            kickstarted as a loyalty reward programme for all its regular
            customers at zero subscription fee. All you need is 500 supercoins
            to b service. For every 100 rupees spent on Flipkart order, Plus
            members earns 4 supercoins & non-plus members earn 2 supercoins.
            Free delivery, early access during sales and shopping festivals,
            priority customer service are the top benefits to a Flipkart Plus
            member. In short, earn more when you shop more!
          </p>
          <p className="pt-4 pb-3">
            What's more, you can even use the Flipkart supercoins for a number
            of exciting services, like:<br></br> An annual Zomato Gold membership<br></br> An
            annual Hotstar Premium membership<br></br> 6 months Gaana plus subscription<br></br>
            Rupees 550 instant discount on flights on ixigo<br></br> Check out
            <a href="#">https://www.flipkart.com/plus/all-offers</a> for the
            entire list. Terms and conditions apply.
          </p>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-[#8c8c8c] pb-2 ">No Cost EMI</h1>
          <p className="pb-2">
            In an attempt to make high-end products accessible to all, our No
            Cost EMI plan enables you to shop with us under EMI, without
            shelling out any processing fee. Applicable on select mobiles
            appliances, furniture, electronics and watches, you can now shop
            without burning a hole in your pocket. If you've been eyeing a
            product for a long time, chances are it may be up for a no cost EMI.
            Take a look ASAP! Terms and conditions apply.
          </p>
        </div>
        <div className="pb-2">
          <h1 className="text-xl font-semibold text-[#8c8c8c] pb-2">EMI on Debit Cards</h1>
          <p>
            Did you know debit card holders account for 79.38 crore in the
            country, while there are only 3.14 crore credit card holders? After
            enabling EMI on Credit Cards, in another attempt to make online
            shopping accessible to everyone, Flipkart introduces EMI on Debit
            Cards, empowering you to shop confidently with us without having to
            worry about pauses in monthly cash flow. At present, we have
            partnered with Axis Bank, HDFC Bank, State Bank of India and ICICI
            Bank for this facility. More power to all our shoppers! Terms and
            conditions apply.
          </p>
        </div>
        <div className="pb-3">
          <h1 className="text-xl font-semibold text-[#8c8c8c] pb-2">Mobile Exchange Offers</h1>
          <p>
            Get an instant discount on the phone that you have been eyeing on.
            Exchange your old mobile for a new one after the Flipkart experts
            calculate the value of your old phone, provided it is in a working
            condition without damage to the screen. If a phone is applicable for
            an exchange offer, you will see the 'Buy with Exchange' option on
            the product description of the phone. So, be smart, always opt for
            an exchange wherever possible. Terms and conditions apply.
          </p>
        </div>
        <div className="pb-2">
          <h1 className="text-[16px] font-medium text-[#8c8c8c] pb-2">What Can You Buy From Flipkart?</h1>
          <h1 className="text-[16px] font-medium text-[#8c8c8c] pb-2">Mobile Phones</h1>
          <p>
            From budget phones to state-of-the-art smartphones, we have a mobile
            for everybody out there. Whether you're looking for larger, fuller
            screens, power-packed batteries, blazing-fast processors,
            beautification - apps, high-tech selfie cameras or just large
            internal space, we take care of all the essentials. Shop from top
            brands in the country like Samsung, Apple, Oppo, Xiaomi, Realme,
            Vivo, and Honor to name a few. Rest assured, you're buying from only
            the most reliable names in the market. What's more, with Flipkart's
            Complete Mobile Protection Plan, you will never again find the need
            to run around service centres. This plan entails you to a number of
            post-purchase solutions, starting at as low as Rupees 99 only!
            Broken screens, liquid damage to phone, hardware and software
            glitches, and replacements - the Flipkart Complete Mobile Protection
            covers a comprehensive range of post-purchase problems, with
            door-to-door services.
          </p>
        </div>
        <div className="pb-2">
          <h1 className="text-[16px] font-medium text-[#8c8c8c] pb-2">Electronic Devices and Accessories</h1>
          <p className="pb-2">
            When it comes to laptops, we are not far behind. Filter among dozens
            of super-fast operating systems, hard disk capacity, RAM, lifestyle,
            screen size and many other criterias for personalized results in a
            flash. All you students out there, confused about what laptop to
            get? Our Back To College Store segregates laptops purpose wise
            (gaming, browsing and research, project work, entertainment, design,
            multitasking) with recommendations from top brands and industry
            experts, facilitating a shopping experience that is quicker and
            simpler.
          </p>
          <p className="pb-2">
            Photography lovers, you couldn't land at a better page than ours.
            Cutting-edge DSLR cameras, ever reliable point-and-shoot cameras,
            millennial favourite instant cameras or action cameras for adventure
            junkies: our range of cameras is as much for beginners as it is for
            professionals. Canon, Nikon, GoPro, Sony, and Fujifilm are some big
            names you'll find in our store. Photography lovers, you couldn't
            land at a better page than ours. Cutting-edge DSLR cameras, ever
            reliable point-and-shoot cameras, millennial favourite instant
            cameras or action cameras for adventure junkies: our range of
            cameras is as much for beginners as it is for professionals. Canon,
            Nikon, GoPro, Sony, and Fujifilm are some big names you'll find in
            our store.
          </p>
          <p className="pb-2">
            Turn your home into a theatre with a stunning surround sound system.
            Choose from our elaborate range of Sony home theatres, JBL soundbars
            and Philips tower speakers for an experience to remember.
          </p>
          <p className="pb-2">
            How about jazzing up your phone with our quirky designer cases and
            covers? Our wide-ranging mobile accessories starting from
            headphones, power banks, memory cards, mobile chargers, to selfie
            sticks can prove to be ideal travel companions for you and your
            phone; never again worry about running out of charge or memory on
            your next vacation.
          </p>
        </div>
        <div className="pb-2">
          <h1 className="text-[16px] font-medium text-[#8c8c8c] pb-2">Large Appliances</h1>
          <p className="pb-2"> 
            Sleek TVs, power-saving refrigerators, rapid-cooling ACs,
            resourceful washing machines - discover everything you need to run a
            house under one roof. Our Dependable TV and Appliance Store ensures
            zero transit damage, with a replacement guarantee if anything goes
            wrong; delivery and installation as per your convenience and a
            double warranty (Official Brand Warranty along with an extended
            Flipkart Warranty) - rest assured, value for money is what is
            promised and delivered. Shop from market leaders in the country like
            Samsung, LG, Whirlpool, Midea, Mi, Vu, Panasonic, Godrej, Sony,
            Daikin, and Hitachi among many others.
          </p>
          <p className="pb-2">
            For certain product categories, Customers meeting the eligibility
            criteria will have the option to buy larger quantities. To know more
            on the eligibility criteria and terms and conditions, please reach
            out to Purchases.<a href="#">oni@flipkart.com.</a>
          </p>
        </div>
        <div className="pb-2">
          <h1 className="text-[16px] font-medium text-[#8c8c8c] pb-2">Small Home Appliances</h1>
          <p>
            Find handy and practical home appliances designed to make your life
            simpler: electric kettles, OTs, microwave ovens, sandwich makers,
            hand blenders, coffee makers, and many more other time-saving
            appliances that are truly crafted for a quicker lifestyle. Live life
            king size with these appliances at hom
          </p>
        </div>
        <div className="pb-2">
          <h1 className="text-[16px] font-medium text-[#8c8c8c] pb-2" >Lifestyle</h1>
          <p>
            Flipkart, 'India ka Fashion Capital', is your one-stop fashion
            destination for anything and everything you need to look good. Our
            exhaustive range of Western and Indian wear, summer and winter
            clothing, formal and casual footwear, bridal and artificial
            jewellery, long-lasting make-up, grooming tools and accessories are
            sure to sweep you f your feet. Shop from crowd favourites like Vero
            Moda, Forever 21, Only, Arrow, Woodland, Nike, Puma, Revion, Mac,
            and Sephora among dozens of other top-of-the-ladder names. From
            summer staple maxi dresses, no-nonsense cigarette pants, traditional
            Bandhani kurtis to street-smart bike jackets, you can rely on us for
            a wardrobe that is up to date. Explore our in-house brands like
            Metronaut, Anmi, and Denizen, to name a few, for carefully curated
            designs that are the talk of the town. Get ready to be spoiled for
            choice. Festivals, office get-togethers, weddings, brunches, or
            nightwear - Flipkart will have your back each time.
          </p>
        </div>
        <div className="pb-2">
          <h1 className="text-[16px] font-medium text-[#8c8c8c] pb-2">Home and Furniture</h1>
          <p className="pb-2">
            Moving to a new place is never easy, especially if you're buying new
            furniture. Beds, sofa sets, dining tables, wardrobes, and TV units -
            it's not easy to set up everything again. With the hundreds of
            options thrown at you, the ride could be overwhelming. What place is
            reliable, what furniture will stand the test of time? These are
            questions you must ask before you choose a store. Well, our
            Durability Certified Furniture Store has not only curated a range of
            furniture keeping in mind the modern Indian consumer but furniture
            that comes with a lab certification, ensuring they last you for up
            to 10 years. Yes, all our furniture has gone through 35 stability
            and load tests so that you receive only the best-quality furniture.
            Be FurniSure, always. Names to look out for are Nilkamal, Godrej
            Interio, Urban Ladder, HomeTown, Durian and Perfect Homes.
          </p>
          <p className="pb-2">
            You may have your furniture all set up, but they could end up
            looking flat and incomplete without complementary decor. Curtains,
            cushion covers, bed sheets, wall shelves, paintings, floor lamps -
            find everythingthat turns a house to an inviting home under one roof
            at Flipkart.
          </p>
        </div>
        <div className="pb-2">
          <h1 className="text-[16px] font-medium text-[#8c8c8c] pb-2">Baby and Kids</h1>
          <p>
            Your kids deserve only the best. From bodysuits, booties, diapers to
            strollers, if you're an expecting mother or a new mother, you will
            find everything you need to set sail on a smooth parenting journey
            with the help of our baby care collection. When it comes to safety,
            hygiene and comfort, you can rely on us without a second thought.
            Huggies, Pampers, MamyPoko, and Johnson & Johnson: we host only the
            most-trusted names in the business for your baby.
          </p>
        </div>
        <div className="pb-2">
          <h1 className="text-[16px] font-medium text-[#8c8c8c] pb-2">Books, Sports and Games</h1>
          <p>
            Work hard and no play? We don't believe in that. Get access to
            best-selling fiction and non-fiction books by your favourite
            authors, thrilling English and Indian blockbusters, most-wanted
            gaming consoles, and a tempting range of fitness and sports gadgets
            and equipment bound to inspire you to get moving.
          </p>
        </div>
        <div className="pb-2">
          <h1 className="text-[16px] font-medium text-[#8c8c8c] pb-2">Grocery/Supermart</h1>
          <p>
            Launching into the grocery vertical, Flipkart introduces Supermart
            that is out to bring everyday essentials close to you. From pulses,
            spices, dairy, personal and sanitary care, breakfast essentials,
            health drinks, spreads, ready to cook, grooming to cleaning agents,
            we are happy to present everything you need to run a house. Now buy
            Grocery products for as low as 1 Rupee only - our 1 Rupee Store
            presents new products every day for a nominal price of 1 Rupee only.
            Terms and conditions apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlipkartStory;

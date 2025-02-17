import React, { useState } from "react";
import { Box, Typography, Card, CardContent, CardMedia, IconButton, useMediaQuery } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import vector24 from "../assets/Vector 24.svg";

const partners = [
  { name: "U.S. Black Chambers", description: "Affectionately known as the “National Voice of Black Businesses”, the USBC provides committed, visionary leadership, and advocacy in the realization of economic empowerment.", img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1718215010230_USBClogo-with-text.png"},

  { name: "City of Atlanta", description: "Atlanta, Georgia, is a major transportation hub with Hartsfield-Jackson Atlanta International Airport, hosting over 1,000 international businesses and consulates, and is home to 13 Fortune 500 companies. Atlanta has rapidly grown into a modern metropolis.", img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1718214326882_1630544813827.jpg" },

  { name: "Congressional Black Caucus", description: "CBC is committed to using the full Constitutional power, statutory authority & financial resources of the federal government to ensure that African Americans and other marginalized communities in the U.S. have the opportunity to achieve the American Dream", img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1718216862825_Screenshot(968).png" },

  { name: "SLDC - St. Louis", description: "SLDC is the independent economic development agency serving the City of St. Louis, MO. It's an action-oriented organization that exists to empower, develop and transform St. Louis through a vibrant, just & growing economy where all people can thrive.", img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1718221479778_SLDClogo.png" },

  { name: "NYSBBA", description: "The New York State Black Business Alliance (NYSBBA) was created to empower and sustain Black businesses and the communities where they are domiciled through entrepreneurship and capitalistic initiatives across the State.", img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1718221600059_NYSBBA_pic.png" },

  {name: "NFPBA", description: "The National Forum for Black Public Administrators (NFBPA), a 501(c)(3) nonprofit organization, is the principal and most progressive organization dedicated to the advancement of black public leadership in local and state governments.", img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1718221797281_NFBPA.png" },

  { name: "AACCNJ", description: "The African American Chamber of Commerce of New Jersey is dedicated to economically empowering and sustaining African American communities and businesses through entrepreneurship and capitalistic initiatives throughout NJ and in partnership with the NBCC.A startup accelerator that provides mentorship and investment to high-growth startups.", img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1718222642260_Screenshot(971).png" },

  { name: "Bunker Labs - Atlanta / IVMF", description: "With more resources than ever to support our community of entrepreneurs, Bunker Labs/IVMF's mission is to help veteran and military spouse entrepreneurs alike launch and grown their own businesses.", img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1718222293577_Screenshot(970).png" },

  { name: "Business BOOST! Society™", description: "From personalized insights and expert advice to exclusive events and collaboration opportunities, your Business BOOST! Society account empowers you to take your business to new heights.", img: "https://storageboostaccount.blob.core.windows.net/test-container-new/1718226259376_IMG_9514.JPG" },
];


const CollaborativePartners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width:600px)");
  const visibleCards = isMobile ? 1 : 3; // Mobile pe 1, normal pe 3 dikhaye
  const totalPartners = partners.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPartners - visibleCards : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex + visibleCards > totalPartners ? prevIndex : nextIndex;
    });
  };
  
  
  

  return (
    <Box sx={{ display:"flex", padding:"2rem 0px 1rem",flexDirection:"column",width: "85%", mx: "auto", px: { xs: 2, sm: 3, md: 5, lg: 8 }, py: 5, position: "relative", overflow: "hidden" , mt:4}}>
      <Box sx={{ textAlign: "center", maxWidth: "800px", mx: "auto", px: 2 }}>
        <Typography variant="h4" sx={{mt:"-6%",marginLeft:"6%",mb:"2%", fontWeight:600, fontFamily: "Outfit", fontSize:"2.5em", lineHeight:1.5}} fontWeight="bold">Collaborative Partners</Typography>


        <Typography variant="body1" sx={{ marginLeft:"-20%",textAlign:"Center",mt: 1, mb: 4 ,fontSize:"18px", width:"150%",fontWeight:400,fontFamily: "Outfit", color: "rgba(63, 60, 60, 0.87)", lineHeight:1.334}}>Business Boost! Society is proud to collaborate with industry-leading partners who share our vision for innovation and excellence. These strategic partnerships allow us to combine our expertise and resources to deliver exceptional solutions to our clients. Here are some of our valued collaborative partners.</Typography>
      </Box>

      {/* Carousel Buttons for All Screens */}
      <IconButton
  onClick={currentIndex > 0 ? handlePrev : undefined} // Disable if first card
  disabled={currentIndex === 0}
  sx={{
    position: "absolute",
    left: 10,
    top: { xs: "65%", sm: "60%" }, 
    transform: "translateY(-50%)",
    backgroundColor: "#FF6600",
    borderRadius: "50%",
    p: 1,
    zIndex: 2,
    color: "#fff",
    cursor: currentIndex === 0 ? "not-allowed" : "pointer", // Prevent clicking when disabled
    "&:hover": {
      backgroundColor: "#FF6600",
    },
    "&.Mui-disabled": {
      backgroundColor: "#FF6600", // Keep the same color when disabled
      color: "#fff", // Ensure the icon remains visible
      opacity: 0.5, // Prevent MUI from making it fully transparent
    },
  }}
>
  <ArrowBackIos />
</IconButton>


<IconButton
  onClick={currentIndex + visibleCards < totalPartners ? handleNext : undefined}
  disabled={currentIndex + visibleCards >= totalPartners}
  sx={{
    position: "absolute",
    right: 10,
    top: { xs: "65%", sm: "60%" }, 
    transform: "translateY(-50%)",
    backgroundColor: "#FF6600",
    borderRadius: "50%",
    p: 1,
    zIndex: 2,
    color: "#fff",
    cursor: currentIndex + visibleCards >= totalPartners ? "not-allowed" : "pointer",
    "&:hover": {
      backgroundColor: "#FF6600",
    },
    "&.Mui-disabled": {
      backgroundColor: "#FF6600",
      color: "#fff",
      opacity: 0.5,
    },
  }}
>
  <ArrowForwardIos />
</IconButton>
      <Box sx={{ display: "flex", justifyContent: "center", overflow: "hidden", mt: 3 }}>
        <Box sx={{ display: "flex", flexWrap: "nowrap", gap: 2, transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`, transition: "transform 0.5s ease-in-out", width: "100%" }}>
          {partners.map((partner, index) => ( 
            <Card 
            key={index} 
            sx={{ 
              width: isMobile ? "calc(100%/1)" : "calc(100% / 3.5)", 
              height: { xs: "320px", md: "340px" }, 
              backgroundColor: index % 2 === 0 ? "rgba(82, 49, 104, 0.1)" : "#FFF3E0", 
              borderRadius: "12px 12px 12px 0", 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "space-between", 
              p: 3, // Increased padding for better spacing 
              flexShrink: 0, 
              position: "relative" 
            }}
          >
          
            {/* Logo Section */}
            <Box sx={{ display: "flex", alignItems: "center", width: "100%", mb: 1 }}>
              <CardMedia 
                component="img" 
                image={partner.img} 
                alt={partner.name} 
                sx={{ 
                  height: "80.4px", 
                  width: "auto", 
                  objectFit: "contain", 
                  maxWidth: "60%", 
                  ml: 0 // Ensures left alignment
                }} 
              />
            </Box>
          
            {/* Content Section */}
            <CardContent sx={{ p: 0 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ textAlign: "left", mb: 1, mt:"-5%" }}>
                {partner.name}
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "left", fontSize: "0.9rem" , mt:2}}>
                {partner.description}
              </Typography>
            </CardContent>
          
            {/* Learn More */}
            <Typography
              variant="body2"
              sx={{
                fontFamily:"Outfit",
                color: "rgb(84, 47, 3)",
                fontWeight: "400",
                lineHeight:1.5,
                letterSpacing:"0.00938em",
                fontSize:"22px",
                cursor: "pointer",
                textAlign: "left",
                mt: 0 ,
                mb:3
              }}
            >
              Learn more →
            </Typography>
          
            {/* Vector Overlay Image */}
            <Box sx={{ position: "absolute", bottom: -4, left: 0, opacity: 1, width: "100px", height: "100px" }}>
              <CardMedia component="img" src={vector24} alt="Vector 24" sx={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </Box>
          
          </Card>
          
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CollaborativePartners;

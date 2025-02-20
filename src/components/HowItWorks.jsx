import { Box, Typography, Button, Grid, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import circle from "../assets/circle.png"
import girls from "../assets/girl.png"
import TextContent from "./TextContent";

const CircleImage = styled("img")({
  width: "100%",
  maxWidth: "660px",
  borderRadius: "50%",
//   border: "8px solid white",
//   objectFit: "cover",
});

const HowItWorks = () => {
  return (
    <Box 
      sx={{ 
        position: "relative", 
        backgroundImage: `url(${girls})`, 
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        color: "white", 
        py: 3, 
        px: '5%',
        overflow: "hidden", // Ensure the image doesn't overflow the container
      }}
    >
      <Grid container spacing={4} alignItems="center" sx={{ position: "relative", zIndex: 3 }}>
      <Grid item xs={12} md={6} sx={{ color: "white", ml: { xs: "-3%", md: "-1%" } }}>
          <Typography sx={{ fontFamily:"Alumni Sans", fontWeight:600,color:'white',fontSize:{xs:"20px",md:'20px'}}}>{TextContent.HowItWorks.nextStepsLabel}</Typography>
          <Typography sx={{fontSize:{xs:'1.5rem', md:'4.2rem'},color:'rgb(218, 100, 5)'}}>{TextContent.HowItWorks.title}</Typography>
          <ul style={{listStyleType: 'none',paddingLeft:'4%'}}>
            <li>
              <Typography sx={{fontSize:{xs:'1rem', md:'2rem',color:'white',fontWeight:'600'}}} gutterBottom>
                {TextContent.HowItWorks.prospectivePartnersTitle}
              </Typography>
              <ol style={{paddingLeft:'4%'}}>
                {TextContent.HowItWorks.prospectivePartnersList.map((item, index) => (
                  <Typography key={index} sx={{fontSize:{xs:'0.6rem', md:'1.1rem',color:'white'}}}>
                    <li>{item}</li>
                  </Typography>
                ))}
              </ol>
            </li>
            <li>
              <Typography sx={{fontSize:{xs:'1rem', md:'2rem',color:'white',fontWeight:'600'}}} gutterBottom>
                {TextContent.HowItWorks.studentsEntrepreneursTitle}
              </Typography>
            </li>
            <ol style={{paddingLeft:'4%'}}>
              {TextContent.HowItWorks.studentsEntrepreneursList.map((item, index) => (
                <Typography key={index} sx={{fontSize:{xs:'0.6rem', md:'1.1rem',color:'white'}}}>
                  <li>{item}</li>
                </Typography>
              ))}
            </ol>
          </ul>
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ borderRadius: "50%" }}>
            <CircleImage src={circle} alt="Team Discussion" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowItWorks;
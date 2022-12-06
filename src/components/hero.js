import { Input,Grid } from "@nextui-org/react"

export const Hero = () => {
    return(
        <Grid.Container gap={4}>
        <Grid xs={12} sm={6} md={6} lg={6}>
        <Input 
            underlined 
            labelPlaceholder="name" 
            color="default" 
          />
          <Input 
            underlined 
            labelPlaceholder="category" 
            color="default" 
          />
          <Input 
            underlined 
            labelPlaceholder="price" 
            color="default" 
          />
          </Grid>
          <Grid xs={12} sm={6} md={6} lg={6}>
            <img  alt="svg"/>
          </Grid>
      
       
      </Grid.Container>
    )
}
import { Input, Grid, Image, Card,Spacer,Text,Row,Textarea} from "@nextui-org/react"

export const Hero = () => {
    return (
        <Grid.Container gap={4}>
            <Grid xs={12} sm={6} md={6} lg={6} justify={"center"} >

                <Card css={{ p: "$6", padding: "$10", marginTop: "$28", mw: "400px" }}
                    variant={"bordered"}>
                   
                        <Card.Header>
                            <Text b color="primary" id="Card-title" size={18}>
                                fill the form below and we will reach out
                            </Text>
                        </Card.Header>
                        <Card.Body>
                            <Input
                                aria-label="email"
                                clearable
                                bordered
                                required
                                fullWidth
                                color="primary"
                                size="lg"
                                placeholder="Email"
                                name="user_email"
                            />
                            <Spacer y={3} />
                            <Input
                                aria-label="name"
                                clearable
                                required
                                bordered
                                fullWidth
                                color="primary"
                                size="lg"
                                placeholder="name"
                                name="user_name"
                            />
                            <Spacer y={3} />
                            <Input
                                aria-label="phone"
                                clearable
                                required
                                bordered
                                fullWidth
                                color="primary"
                                size="lg"
                                placeholder="phone"
                                name="phone"
                            />
                            <Spacer y={3} />
                            <Textarea
                                bordered
                                aria-label="message"
                                color="primary"
                                placeholder="Send us a message"
                                name="message"
                            />
                            <Row></Row>
                        </Card.Body>
                        <Card.Footer>
                       
                        </Card.Footer>
                  
                </Card>


            </Grid>

            <Grid xs={12} sm={6} md={6} lg={6}>
                <Image
                    src="form.svg"
                    css={{ borderRadius: "$2xl" }}
                    alt={"con"}
                />
            </Grid>


        </Grid.Container>
    )
}
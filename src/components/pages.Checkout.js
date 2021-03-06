import  { Box, Icon,Button } from "@chakra-ui/react"
import { useHistory } from "react-router";
import ProductsHeader from "./mini-components/ProductTopHeader";
import { Input } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'
import { useContext, useState } from "react";
import { GearContext } from "../context/Context";
import { GiPayMoney } from 'react-icons/gi'
import ParcelUpgrade from "./mini-components/checkpointContainer";
import CheckoutButton from "./FinalModal";



const Checkout = () => {
    const [value, SetValue] = useState(true)
    const Shipping = 50
    const [Items, purchased, Total] = useContext(GearContext)
    const total = Total.reduce( (a, b) => a + b)
    const  Vat = 0.2 * total
    const GrandTotal = Vat + total + Shipping
    const History = useHistory()

    
    

    return (
         <Box width={["400px","100%", "100%", "100%"]} height={["200rem","200rem","200rem","140rem"]} bgColor="#f3f3f3">
             <ProductsHeader/>

{/* go back to previous page button */}
             <Box as="Button" fontSize="23px" fontWeight="600"
                marginTop="6rem" marginLeft="10%"
                 textTransform ="capitalize" height="3rem" width="7rem" 
                onClick={History.goBack}
                _hover={{cursor:"pointer", color:"#D87D4A"}} >
                   go back
             </Box> 
{/* checkout area */}
             <Box as ="article" 
             width="80%" margin="auto"
              height="83%" display="flex" 
              flexDirection={["column", "column", "column","row"]}
              justifyContent="space-between" bgColor="#f3f3f3">
{/* form input area */}
                    <Box as="section" width={["100%","100%", "100%","65%"]} height={["150rem", "120rem", "100rem", "90rem"]} marginBottom={"4rem"} bgColor="#fff">
                        <Box as="h1" textTransform="uppercase" 
                        fontSize="33px" letterSpacing="2px"
                        fontWeight="600" margin="2rem"
                        >checkout</Box>
{/* Billing section within form input area */}
                            <Box as="h3" fontSize="20px" color="#D87D4A" fontWeight="550" margin="2rem"textTransform="uppercase" letterSpacing="1px" >billing details</Box>
                        <Box as ="form" 
                         gridGap="4%"
                        marginLeft="2rem">   
                        <Box display="flex" flexDirection={["column", "row", "row", "row"]}  width="100%">
                        <Box marginRight="1rem">
                        <Box as ="label" fontWeight="550" textTransform="capitalize">Name</Box>
                        <Input placeholder='Axel Ward' marginRight=".9rem"  focusBorderColor='#D87D4A' size='lg'  my=".5rem" />
                        </Box>
                        <Box marginRight="1rem">
                        <Box as ="label" fontWeight="550" textTransform="capitalize">Email</Box>
                        <Input placeholder='axel@email.com' focusBorderColor='#D87D4A' size='lg' my=".5rem" />
                        </Box>
                            </Box>               
         
                        
                        
                        
                        <Box my=".5rem" marginRight="1rem">
                        <Box as ="label" fontWeight="550" textTransform="capitalize">phone number</Box>
                        <Input placeholder='+1 233 4454 2364' focusBorderColor='#D87D4A' size='lg' my=".5rem"/>
                        </Box>
                        </Box>
                        <Box as ="form" marginX="2rem" marginY="4rem"  width="100%">
{/* Shipping Section form within inpt area */}
                              <Box width="100%">
                              <Box as="h3" fontSize="20px" color="#D87D4A" fontWeight="550" marginY="2rem"
                              textTransform="uppercase" letterSpacing="1px"  >shipping info</Box>
                               <Box marginRight="1rem">
                                   <Box as ="label" fontWeight="550" textTransform="capitalize">address</Box>
                                <Input placeholder='127 stratford avenue' focusBorderColor='#D87D4A' size='lg' my=".5rem" width="90%" display="flex"/>
                               </Box>
                                
                              </Box>
                              <Box display="flex" flexDirection={["column", "row", "row", "row"]}  width="90%">
                              <Box my="1rem" marginRight="1rem">
                                    <Box as ="label" fontWeight="550" textTransform="capitalize">zipcode</Box>
                                    <Input placeholder='100123' size='lg' my=".5rem" focusBorderColor='#D87D4A' />
                                    </Box>
                                    <Box my=".6rem" marginRight="1rem">
                                     <Box as ="label" fontWeight="550"  textTransform="capitalize">city</Box>
                                <Input placeholder='New York' size='lg' my=".5rem" focusBorderColor='#D87D4A' />
                                 </Box>
                              </Box>

                        <Box my="1rem" marginRight="1rem" >
                        <Box as ="label" fontWeight="550" textTransform="capitalize">country</Box>
                        <Input placeholder='United States' size='lg' focusBorderColor='#D87D4A'  my=".5rem" width="90%"/>
                        </Box>
                             
                        </Box>
{/*  Payment detail  */}
                        <Box  marginX="2rem" marginY="3rem">
                            <Box as="h3" fontSize="20px" color="#D87D4A" fontWeight="550" marginTop="6rem"
                            marginBottom="3rem"
                              textTransform="uppercase" letterSpacing="1px"  >payment details</Box>
                            <Box height="23rem" display ="flex" flexDirection={["column", "row", "row", "row"]} width="100%">
                                <Box as="h3" height="5rem"  width={["100%","48%", "48%", "48%"]} textTransform="capitalize" fontFamily="23px" fontWeight="650"
                                
                                >payment method</Box>
                                <Box height="10rem" width={["100%","48%", "48%", "48%"]}>
                                    <RadioGroup defaultValue='e-Money'>
                                        <Box width="100%" height="3rem" my=".3rem" cursor="pointer" borderWidth="1px"  borderColor="#D87D4A" colorScheme="#D87D4A" borderRadius="10px" _active={{borderColor:'orange'}}>
                                            <Radio value={value} onClick={()=> SetValue(true)} size="lg"display="flex" justifyContent="flex-start" alignItems="center" my=".5rem" mx="1rem" colorScheme="orange">e-money</Radio>
                                        </Box>
                                        <Box width="100%" height="3rem" my="1rem" cursor="pointer" borderWidth="1px"  borderColor="#D87D4A" colorScheme="#D87D4A" borderRadius="10px" _active={{borderColor:'orange'}}>
                                            <Radio value={value}  onClick={()=> SetValue(false)} size="lg"display="flex" justifyContent="flex-start" alignItems="center" my=".5rem" mx="1rem" colorScheme="black">cash on delivery</Radio>
                                        </Box>
                                    </RadioGroup>


                                    <Box as="input" ></Box>
                                </Box>
                            </Box>
                            {
/* { to display contents in accordance to type of payment to be made*/
                                value ?
                                 <Box display="flex" justifyContent="space-between" flexDirection={["column", "row", "row", "row"]} width="100%" height="7rem" marginTop="-9rem">
                                    <Box width={["100%","48%", "48%", "48%"]} height="7rem">
                                            <Box as ="label" fontWeight="550">e-money Number</Box>
                                            <Input placeholder='0000 1123 4567 0987' focusBorderColor='#D87D4A' size='lg' width="100%" my=".5rem" />
                                        </Box>
                                        <Box width={["100%","48%", "48%", "48%"]} height="7rem">
                                            <Box as ="label" fontWeight="550" >e-money Pin</Box>
                                            <Input placeholder='1234' focusBorderColor='#D87D4A' size='lg'width="100%" my=".5rem" />
                                        </Box>
                                </Box>
                                :<Box width="100%" height="7rem" marginTop="-9rem" display="flex" flexDirection={["column", "row", "row", "row"]} >

                                <Icon as ={GiPayMoney} fontSize="100" color='#D87D4A' />
                                    <Box as="p" lineHeight="27px" 
                                    fontSize="21px" letterSpacing="1px" width="100%" height="100%">
                                        The 'Cash on Delivery' option enables you to pay on cash when our delivery courier
                                        arrives at your residence. Just make sure your address is correct so that your order will
                                        not be cancelled.
                                    </Box>
                                 </Box>
                            }

                        </Box>
                    </Box>
{/* dispalying products purchased //SUMMARY */}
                    <Box as="aside" width={["100%","100%", "100%","33%"]} height="50%" bgColor="#fff" >
                        <Box width="80%" margin="auto" marginTop="2rem" height="90%">
                            <Box as="h2" textTransform="uppercase" fontSize="21px" fontWeight="600">summary</Box>
{/* displayin contents purchased & number of items per item  */}
                            <Box>
                            { purchased.length === 0 ? <Box margin="auto" >Cart is empty</Box> : <Box margin="auto" width="100%">{
                             purchased.map(item => <ParcelUpgrade value ={item.value} id={ item.id}/>)
                             }</Box>}
                            </Box>
                            {/* total price */}
                            <Box display="flex" justifyContent="space-between" my="1rem"> 
                            <Box as="h2" textTransform="uppercase" fontSize="20px">total</Box>
                            <Box as ="h2" textTransform="uppercase" fontSize="20px" fontWeight="700">${Total.reduce( (a, b) => a + b)}</Box>
                            </Box>
{/* shipping price */}
                            <Box display="flex" justifyContent="space-between" my="1rem"> 
                            <Box as="h2" textTransform="uppercase" fontSize="20px">shipping</Box>
                            <Box as ="h2" textTransform="uppercase" fontSize="20px" fontWeight="700">${Shipping}</Box>
                            </Box>
{/* vat */}
                            <Box display="flex" justifyContent="space-between" my="1rem"> 
                            <Box as="h2" textTransform="uppercase" fontSize="20px">vat (included)</Box>
                            <Box as ="h2" textTransform="uppercase" fontSize="20px" fontWeight="700">${Vat}</Box>
                            </Box>
{/* grand total // summation of everything */}
                            <Box display="flex" justifyContent="space-between" my="1rem"> 
                            <Box as="h2" textTransform="uppercase" fontSize="20px">grand total</Box>
                            <Box as ="h2" textTransform="uppercase" fontSize="20px" fontWeight="700">${GrandTotal}</Box>
                            </Box>
                            
                            <CheckoutButton value ={GrandTotal}/>
                        </Box>
                    </Box>  
            </Box>

         </Box> 
         );
}
 
export default Checkout;
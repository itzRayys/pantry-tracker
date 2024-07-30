'use client';
import { Box, Stack, Typography, Button } from "@mui/material";
import { firestore } from "@/firebase";
import { useEffect } from "react";

const item = ['tomato', 'potato', 'carrot', 'celery', 'avocado', 'lettuce', 'broccoli', 'raddish', 'ginger']
const amount = ['2', '6', '2', '7', '3', '6', '5', '1', '7', '16', '4', '1', '1', '6']

export default function Home() {
  useEffect(() => {
    const updatePantry = async () => {
      const snapshot = query(collection(firestore, 'pantry'))
      const docs = await getDocs(snapshot)
      docs.foreach((doc) => {
        console.log(doc.id, doc.data())
      })
    }
  updatePantry()
  }, [])


  return (
    <Box 
      width="100vw"
      height="100vh"
      display={'flex'}
      justifyContent={'center'}
      flexDirection={'column'}
      alignItems={'center'}
      fontFamily={'Roboto'}
      bgcolor={'#161b21'}
    >
      <Box
        border='3px solid #252c36'
        borderRadius={'10px'}
        >
      <Box
          width="800px"
          height="100px"
          bgcolor={"##404f61"}
          color={'#ffffff'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          fontSize={'60px'}
          borderBottom={'3px solid #252c36'}
          borderRadius={'10px'}
          marginBottom={'3px'}
      >Pantry Items</Box>
        <Stack 
          width="800px" 
          height="450px" 
          spacing={2} 
          overflow={'auto'}
          Stack=''
          marginLeft={'3px'}
          paddingRight={'3px'}
          marginBottom={'3px'}
        >
          {item.map((i) =>
          <Box
            key={i}
            width='100%'
            height='150px'
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            bgcolor={'#252c36'}
            borderRadius={'10px'}
            >
              <Typography
                color={'#848a91'}
                variant={"h3"}
              >
                {
                  i.charAt(0).toUpperCase() + i.slice(1)
                }
              </Typography>
            </Box>
          )}
          {amount.map((i) =>
            <Box
              width='50px'
              height='150px'
            >

            </Box>
          )}
        </Stack>
        <Box
          bgcolor={"#8d99a5"}
        >

        </Box>
      </Box>
    </Box>
  );
}

import { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function Detai() {
  const [customer, setCustomer] = useState({
    name: "اُمید",
    family: "عبدی",
    nationalID: "0081027516",
    stockExchangeID: "عبد 174",
  });

  return (
    <div>
      <Grid spacing={2} container justifyContent="center">
        <Grid item xs={9} md={4}>
          <TextField
            id="name"
            defaultValue={customer.name}
            inputProps={{
              readOnly: true,
              style: {
                fontSize: "20px",
                fontFamily: "IRANSansWeb",
              },
            }}
            label={
              <Typography
                variant="h5"
                component="h2"
                fontFamily={"IRANSansWeb"}
              >
                نام
              </Typography>
            }
          />
        </Grid>

        <Grid item xs={9} md={4}>
          <TextField
            id="family"
            defaultValue={customer.family}
            inputProps={{
              readOnly: true,
              style: {
                fontSize: "20px",
                fontFamily: "IRANSansWeb",
              },
            }}
            label={
              <Typography
                variant="h5"
                component="h2"
                fontFamily={"IRANSansWeb"}
              >
                نام خانوادگی
              </Typography>
            }
          />
        </Grid>

        <Grid item xs={9} md={4}>
          <TextField
            id="nationalID"
            defaultValue={customer.nationalID}
            inputProps={{
              readOnly: true,
              style: { fontSize: "20px", fontFamily: "IRANSansWeb" },
            }}
            label={
              <Typography
                variant="h5"
                component="h2"
                fontFamily={"IRANSansWeb"}
              >
                کد ملی
              </Typography>
            }
          />
        </Grid>

        <Grid item xs={9} md={4}>
          <TextField
            id="stockExchangeID"
            defaultValue={customer.stockExchangeID}
            inputProps={{
              readOnly: true,
              style: { fontSize: "20px", fontFamily: "IRANSansWeb" },
            }}
            label={
              <Typography
                variant="h5"
                component="h2"
                fontFamily={"IRANSansWeb"}
              >
                کد بورسی
              </Typography>
            }
          />
        </Grid>
      </Grid>
    </div>
  );
}

import React from 'react';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import Layout from '../../components/Layout';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  Card,
  Button,
} from '@material-ui/core';
import useStyles from '../../utils/styles';

export default function ProductScreen() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <Layout title={product.name}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          Volver a la pagina principal
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem component="h1">{product.name}</ListItem>
            <ListItem>
              <ListItem>Categoria: {product.category}</ListItem>
              <ListItem>Modelo: {product.brand}</ListItem>
              <ListItem>Raiting: {product.raiting}</ListItem>
            </ListItem>
            <ListItem>Descripcion: {product.description}</ListItem>
            <ListItem>Precio: {product.price}</ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <ListItem>
              <Grid container>
                <Grid item xs={6}>
                  <Typography>Precio</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>${product.price}</Typography>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Button fullWidth variant="contained" color="primary">
                Agregar al carrito
              </Button>
            </ListItem>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

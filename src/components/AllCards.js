import React from "react"
import { Grid } from "@material-ui/core"
import Card from "./Card"
import * as styles from "../styles/allCards.module.css"

function AllCards({ blogs }) {

  return (
    <div className={styles.container}>
      <Grid container>
        {blogs.map(blog => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className={styles.gridItem}
            key={blog.id}
          >
            <Card blog={blog} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default AllCards

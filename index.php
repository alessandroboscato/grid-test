

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>

    <div class="grid">
      <!-- change this value to display as many looks as you want -->

      <?php for ($j = 0; $j < 6; $j++){ ?>
          <div class="look-box special-item-<?php echo $j ?>">
            <img class="look" src="img/k013_ai20_1.jpg" src="img/5419_1.jpg" alt="">
          </div>
        <?php } ?>


      <!-- change this value to display as many results as you want -->
      <?php for ($i = 0; $i < 9; $i++){ ?>
          <div class="item">
            <img src="img/5419_1.jpg" alt="">
            <div class="product-details">
              <h4>Jeans cotone</h4>
              <p>ABITO IN TESSUTO <?php echo $i ?></p>
            </div>
          </div>
        <?php } ?>

    </div>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="main.js">

  </script>
  </body>
</html>

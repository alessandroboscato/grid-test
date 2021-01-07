

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

      <div class="special-item-1">
        <img class="look" src="img/5419_1.jpg" alt="">
      </div>

      <div class="special-item-2">
        <img class="look" src="img/5419_1.jpg" alt="">
      </div>

      <div class="special-item-3">
        <img class="look" src="img/5419_1.jpg" alt="">
      </div>

      <div class="special-item-4">
        <img class="look" src="img/5419_1.jpg" alt="">
      </div>

      <div class="special-item-5">
        <img class="look" src="img/5419_1.jpg" alt="">
      </div>

      <?php for ($i = 0; $i < 20; $i++){ ?>
          <div class="item">
            <img src="img/k013_ai20_1.jpg" alt="">
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

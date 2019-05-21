<?php
    
    function outputOrderRow($file, $title, $quantity, $price) {
        $amount=0;
        $file="images/books/tinysquare/".strval($file);
        $amount=$quantity*$price;
        echo "<tr>";
        echo "<td><img src=".$file."></td>";
        echo "<td class='mdl-data-table__cell--non-numeric'>".strval($title)."</td>";
        echo "<td>".strval($quantity)."</td>";
        echo "<td>$".strval($price)."</td>";
        echo "<td>$".strval($amount)."</td>";
        echo "</tr>"; 
          
    }

    
?>
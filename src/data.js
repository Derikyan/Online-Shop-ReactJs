import {useEffect} from 'react';

function Inf () {

    useEffect(() => {
        fetch("http://localhost/shop/index2.php")
          .then((data) => {
            return console.log(data.json());
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

    return [
        {
            name: "chair",
            description: "lala al alal lal ala",
            price: 250,
            image: "https://stormsend1.djicdn.com/tpc/uploads/spu/cover/767191572ee74ba97f009ee053b754ee@retina_small.png",
            status: false,
        },
        {
            name: "assd",
            description: "lala al alal lal ala",
            price: 280,
            image: "https://stormsend1.djicdn.com/tpc/uploads/spu/cover/767191572ee74ba97f009ee053b754ee@retina_small.png",
            status: false,
        },
        {
            name: "asdsadasdsad",
            description: "lala al alal lal ala",
            price: 350,
            image: "https://stormsend1.djicdn.com/tpc/uploads/spu/cover/767191572ee74ba97f009ee053b754ee@retina_small.png",
            status: false,
        },
        {
            name: "asdsadasdsad",
            description: "lala al alal lal ala",
            price: 350,
            image: "https://stormsend1.djicdn.com/tpc/uploads/spu/cover/767191572ee74ba97f009ee053b754ee@retina_small.png",
            status: false,
        },
        {
            name: "asdsadasdsad",
            description: "lala al alal lal ala",
            price: 350,
            image: "https://stormsend1.djicdn.com/tpc/uploads/spu/cover/767191572ee74ba97f009ee053b754ee@retina_small.png",
            status: false,
        },
        {
            name: "asdsadasdsad",
            description: "lala al alal lal ala",
            price: 350,
            image: "https://stormsend1.djicdn.com/tpc/uploads/spu/cover/767191572ee74ba97f009ee053b754ee@retina_small.png",
            status: false,
        },
        
    ]
}

export default Inf;
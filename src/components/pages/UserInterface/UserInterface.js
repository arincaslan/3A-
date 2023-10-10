import { React, useState, useEffect } from 'react';
import { Button, Spinner, Box, Text, Image, Heading, UnorderedList, ListItem, VStack, Flex } from '@chakra-ui/react';
import './UserInterface.css';
import imageSrc from '../../../Logo.png'
import imageAdım1 from '../../../Adım1.jpg';
import imageAdım2 from '../../../Adım2.jpg';
import imageAdım3 from '../../../Adım3.jpg';
import imageAdım4 from '../../../Adım4.jpg';
import { Link } from 'react-router-dom';
import { auth } from '../../../services/auth';
import instance from '../../../services/axios-firebase';
import Footer from '../Footer/Footer';


function UserInterface({ onLogout }) {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await instance.get(`/users/${auth.currentUser.uid}.json`);
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <Box w="100%" mt={300} display="flex" alignItems="center" justifyContent="center" >
        <Spinner
          w={200}
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        <Text fontFamily="heading4" color="secondary.700" fontSize="xl" fontWeight="bold">SAYFA YÜKLENİYOR...</Text>
      </Box>
    );
  } else {
    return (
      <Box bg="gray.100" p={5} rounded="md">
        <Flex direction={["column", "row"]} alignItems="center" justify="space-between">
          {/* Sol Taraf Görsel */}
          <Flex justifyContent="center">
            <Box w={["80%", "60%"]} p={5}>
              <Image src={imageSrc} alt="Örnek Görsel" borderRadius="md" w="100%" />
            </Box>
          </Flex>
          {/* Sağ Taraf Metin ve Seçenekler */}
          <Box w={["100%", "50%"]} p={5} borderWidth="1px" borderRadius="md" boxShadow="lg">
            <Heading as="h2" size="xl" fontFamily="heading5" color="primary.900" mb={4}>Hoş Geldiniz</Heading>
            <Text fontFamily="heading4" mb={4}>Platformumuz üzerinde size sunduğumuz içerikler.</Text>
            <VStack spacing={4}>
              <Link to="/create-report">
                <Button fontFamily="heading1" w="250px" colorScheme="teal">Rapor Oluştur</Button>
              </Link>
              <Link to="my-reports">
                <Button fontFamily="heading1" w="250px" colorScheme="blue">Raporlarım</Button>
              </Link>
              <Link to="my-profile">
                <Button fontFamily="heading1" w="250px" colorScheme="blue" variant="outline">Profilim</Button>
              </Link>
              <Button fontFamily="heading1" w="250px" colorScheme="red" onClick={onLogout}>Çıkış Yap</Button>
            </VStack>
          </Box>
        </Flex>
        {/* Alt Kısım */}
        <Box mt={5} p={5} bg="secondary.100" boxShadow="lg" borderRadius="md">
          <Heading fontFamily="heading4" mb={4}>Platformumuzu Nasıl Kullanırsınız?</Heading>
          <Text fontSize={20} fontFamily="body2" mb={16}>
            3A+, gayrimenkul değerleme raporlarını hızlı ve kolay bir şekilde oluşturmanıza yardımcı olmaktadır.
            Raporlarınızı adım adım oluşturabilir, değerlemelerinizi kolaylıkla yönetebilir ve analizlerinizi birkaç tıklamayla tamamlayabilirsiniz.
            Basit ve kullanıcı dostu arayüzümüzle, gayrimenkul değerlemenizi hiç olmadığı kadar kolaylaştırıyoruz.
          </Text>
          <Flex direction={["column", "row"]} alignItems="center" justify="space-between" mb={20}>
            <Image src={imageAdım1}
              alt="Profil Oluşturma Görseli"
              boxShadow="xl"
              borderRadius="md"
              objectFit="cover"
              w={["100%", "40%"]}
              h="400px" />
            <Box
              w={["100%", "50%"]}
              ml={["0", "5"]}
              p={4}
              boxShadow="xl"
              borderRadius="md"
              bg="white"
              transition="box-shadow 0.2s ease-in-out"
              _hover={{ boxShadow: "2xl" }}
            >
              <Heading fontFamily="heading4" color="secondary.800" mb={3}>1. Adım: Profil Oluşturma</Heading>
              <Text fontSize={["md", "lg"]} fontFamily="body" color="primary.700" mb={3}>
                Kullanıcılarımız için oluşturulan "Profilim" sekmesi, raporların personalizasyonunda esas alınan bilgileri girmeniz için tasarlandı.
              </Text>
              <Text fontSize={["md", "lg"]} fontFamily="body" color="primary.700" mb={3}>
                Bu bölümde değerleme uzmanlarınızın bilgilerini, SPK numaralarını ve firma logonuzu ekleyerek profilinizi tamamlayabilirsiniz.
              </Text>
              <Text fontSize={["md", "lg"]} fontFamily="body" color="primary.700">
                Belirttiğiniz bu bilgiler, oluşturduğunuz raporlara otomatik olarak yansıtılacak, böylece her rapor oluşturma aşamasında tekrar tekrar aynı bilgileri girmenize gerek kalmayacaktır.
              </Text>
            </Box>
          </Flex>

          <Flex direction={["column-reverse", "row"]} alignItems="center" justify="space-between" mb={20}>
            <Box w={["100%", "50%"]}
              ml={["0", "5"]}
              p={4}
              boxShadow="xl"
              borderRadius="md"
              bg="white"
              transition="box-shadow 0.2s ease-in-out"
              _hover={{ boxShadow: "2xl" }}>
              <Heading fontFamily="heading4" color="secondary.800" mb={3}>2. Adım: Rapor Oluşturma</Heading>
              <Text color="primary.700" fontSize={20} fontFamily="body" mb={3}>
                Gayrimenkul değerleme sürecinde, bilgi toplama aşaması oldukça kritiktir. Platformumuzda sunulan formlar, bu süreci kolaylaştırmak amacıyla tasarlanmıştır.
              </Text>
              <Text fontSize={20} color="primary.700" fontFamily="body" mb={3}>
                Formlarda, belirli bilgilerin nereden alınabileceğine dair pratik açıklamalarla yönlendirmeler bulacaksınız. Bu sayede değerlemenizi hatasız ve eksiksiz bir şekilde tamamlayabilirsiniz.
              </Text>
              <Text fontSize={20} fontFamily="body" color="primary.700" mb={3}>
                Değerleme uzmanları, birden çok değerleme metodunu aynı anda kullanma olanağına sahiptir. Kullanabileceğiniz temel değerleme metodları; Emsal Karşılaştırma, Maliyet Yaklaşımı ve Gelir Yaklaşımıdır.
              </Text>
              <Text fontSize={20} fontFamily="body" color="primary.700">
                Bu metodları kullanarak, gayrimenkulünüzün piyasa değerini en doğru şekilde belirleyebilirsiniz.
              </Text>
            </Box>
            <Image
              src={imageAdım2}
              alt="Form Doldurma Görseli"
              boxShadow="xl"
              borderRadius="md"
              objectFit="cover"
              w={["100%", "40%"]}
              h="400px" />
          </Flex>


          <Flex direction={["column", "row"]} alignItems="center" justify="space-between" mb={20}>
            <Image
              src={imageAdım3}
              alt="Ödeme Görseli"
              boxShadow="xl"
              borderRadius="md"
              objectFit="cover"
              w={["100%", "40%"]}
              h="400px" />
            <Box w={["100%", "50%"]}
              ml={["0", "5"]}
              p={4}
              boxShadow="xl"
              borderRadius="md"
              bg="white"
              transition="box-shadow 0.2s ease-in-out"
              _hover={{ boxShadow: "2xl" }}>
              <Heading fontFamily="heading4" color="secondary.800" mb={3}>3. Adım: Ödeme</Heading>
              <Text fontSize={20} fontFamily="body" mb={3} color="primary.700">
                Raporunuzu oluşturduktan sonra "Rapor Oluştur" butonuna tıkladığınızda karşınıza bir ödeme ekranı gelecektir. Güvenli bir online ödeme sistemi aracılığıyla ödemenizi gerçekleştirebilirsiniz.
              </Text>
              <Text fontSize={20} fontFamily="body" mb={3} color="primary.700">
                Ödeme işleminiz başarılı bir şekilde tamamlandığında, oluşturduğunuz rapor otomatik olarak "Raporlarım" sayfanıza eklenecektir ve sizde bu sayfaya yönlendirileceksiniz.
              </Text>
              <Text fontSize={20} fontFamily="body" color="primary.700">
                "Raporlarım" sayfasından istediğiniz zaman bu rapora erişebilir, inceleyebilir veya indirebilirsiniz.
              </Text>
            </Box>
          </Flex>

          <Flex direction={["column-reverse", "row"]} alignItems="center" justify="space-between" mb={5}>
            <Box w={["100%", "50%"]}
              ml={["0", "5"]}
              p={4}
              boxShadow="xl"
              borderRadius="md"
              bg="white"
              transition="box-shadow 0.2s ease-in-out"
              _hover={{ boxShadow: "2xl" }}>
              <Heading fontFamily="heading4" color="secondary.800" mb={3}>4. Adım: Rapor İçeriği ve İndirme</Heading>
              <Text fontSize={20} fontFamily="body" mb={3} color="primary.700">
                "Raporlarım" sayfasında istediğiniz raporu seçerek detaylı içeriğini görüntüleyebilirsiniz. Raporunuzu detaylı olarak inceledikten sonra, raporun son kısmında bulunan "PDF İndir" ve "Word İndir" butonlarına tıklayarak raporunuzu istediğiniz formatta indirebilirsiniz.
              </Text>
              <Text fontSize={20} fontFamily="body" mb={3} color="primary.700">
                Bu sayede raporlarınızı dijital ortamda saklama, paylaşma veya basılı olarak çıktı alabilme imkanına sahip olacaksınız.
              </Text>
              <Text fontSize={20} fontFamily="body" color="primary.700">
                PDF ve Word formatları, profesyonel değerleme raporlarının standart formatlarıdır ve tüm platformlarda kolayca açılabilir.
              </Text>
            </Box>
            <Image
              src={imageAdım4}
              alt="Rapor Çıktısı Görseli"
              boxShadow="xl"
              borderRadius="md"
              objectFit="cover"
              w={["100%", "40%"]}
              h="400px" />
          </Flex>
        </Box>
        <Footer />
      </Box>

    );
  }
}

export default UserInterface;

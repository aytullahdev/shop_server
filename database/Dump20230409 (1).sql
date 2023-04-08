CREATE DATABASE  IF NOT EXISTS `shop` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `shop`;
-- MySQL dump 10.13  Distrib 8.0.32, for macos13 (x86_64)
--
-- Host: localhost    Database: shop
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `gender` char(5) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'femal','SALWAR KAMEEZ'),(2,'f','KURTIS'),(3,'male','Kamiz');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `price` int NOT NULL DEFAULT '0',
  `category_id` varchar(100) NOT NULL,
  `stock` varchar(45) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL,
  `img2` varchar(200) DEFAULT NULL,
  `img3` varchar(200) DEFAULT NULL,
  `note` varchar(200) DEFAULT NULL,
  `sku` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (11,'Zebtan Farmaish Vol-04 Luxury 3pcs','<h2 style=\"box-sizing: border-box; font-family: Poppins, sans-serif; font-style: normal; font-weight: 500; letter-spacing: 0.6px; color: rgb(33, 37, 41); line-height: 1.2; word-break: break-word; font-size: 2rem; margin-top: 0px; margin-bottom: 0.5rem; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Product Details</h2><ul style=\"list-style-type: square;\"><li>Embroidered Net Body for Front With H.m Work&nbsp; (1 Pcs)</li><li>Embroidered Net Body for Back &nbsp;(1 Pcs)</li><li>Embroidered Net Sleeves &nbsp;(0.67 Yds)</li><li>Embroidered Net 6 Panel for Front Lehnga / Maxi&nbsp; (2 Yds)</li><li>Embroidered Net Back Lehnga / Maxi &nbsp;(2 Yds)</li><li>Embroidered Net Dupatta&nbsp; (2 .5 Yds)</li><li>Embroidered Ghera Lace &nbsp;(4 Yds)</li><li>Grip Silk Inner&nbsp; (5 Yds)</li></ul>',2000,'KURTIS','Out','https://ik.imagekit.io/ql0cuq4dm/10_uvQb4t_9I.png','','','Stiched Avaiable','FC-08'),(12,'Zebtan Farmaish','<p><strong style=\"background-color: rgb(204, 0, 0);\">Some Details</strong></p>',1233,'KURTIS','Out','https://ik.imagekit.io/ql0cuq4dm/1_x8ni_m5Vq.png','https://ik.imagekit.io/ql0cuq4dm/4_BtKzqR4SW.png','https://ik.imagekit.io/ql0cuq4dm/14_iHPUCHAmj.png','','ee-12'),(13,'asdf','<p>test</p>',1222,'KURTIS','In Stock','https://ik.imagekit.io/ql0cuq4dm/18_9VbkQYmD5.png','https://ik.imagekit.io/ql0cuq4dm/11_e4HdeX9wo.png','','Noted','');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-09  0:57:21

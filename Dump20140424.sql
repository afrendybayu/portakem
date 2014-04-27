CREATE DATABASE  IF NOT EXISTS `medco` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `medco`;
-- MySQL dump 10.13  Distrib 5.5.32, for debian-linux-gnu (i686)
--
-- Host: daunbiru.com    Database: k0761953_medco
-- ------------------------------------------------------
-- Server version	5.1.73-cll

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `aksi`
--

DROP TABLE IF EXISTS `aksi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `aksi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(45) NOT NULL,
  `ket` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aksi`
--

LOCK TABLES `aksi` WRITE;
/*!40000 ALTER TABLE `aksi` DISABLE KEYS */;
INSERT INTO `aksi` VALUES (1,'Reset',NULL),(2,'Repair',NULL),(3,'Service',NULL),(4,'Replace',NULL);
/*!40000 ALTER TABLE `aksi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_equip`
--

DROP TABLE IF EXISTS `cat_equip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_equip` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(45) DEFAULT NULL,
  `parent` int(11) DEFAULT NULL,
  `kode` varchar(45) DEFAULT NULL,
  `ket` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_equip`
--

LOCK TABLES `cat_equip` WRITE;
/*!40000 ALTER TABLE `cat_equip` DISABLE KEYS */;
INSERT INTO `cat_equip` VALUES (1,'Sentrifugal Pump',NULL,NULL,NULL),(2,'ARiel',NULL,NULL,NULL),(3,'AjaxDR',NULL,NULL,NULL),(4,'Diesel Cat',NULL,NULL,NULL),(5,'Compressor',0,NULL,NULL),(6,'Pump',0,NULL,NULL),(7,'Genset',0,NULL,NULL),(8,'Ariel',5,'COMP',NULL),(9,'AjaxDR',5,'COMP',NULL),(10,'Cat 3500',7,'ENG',NULL),(11,'Cat 398',7,'ENG',NULL),(12,'Cat 3000',7,'ENG',NULL);
/*!40000 ALTER TABLE `cat_equip` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cause`
--

DROP TABLE IF EXISTS `cause`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cause` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(45) DEFAULT NULL,
  `kode` varchar(5) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  `obama` tinyint(4) DEFAULT NULL,
  `sap` tinyint(4) DEFAULT NULL,
  `ket` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`,`kode`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cause`
--

LOCK TABLES `cause` WRITE;
/*!40000 ALTER TABLE `cause` DISABLE KEYS */;
INSERT INTO `cause` VALUES (1,'Improper capacity','CDIC',1,1,'Inadequate dimension/capacity'),(2,'Improper material','CDIM',1,NULL,'Improper material selection'),(3,'Improper design','CDID',1,1,'Inadequate equipment design or configuration (shape, size, technology, configuration, operability, maintainability, etc.)'),(4,'Fabrication error','CDFE',1,1,'Manufacturing or processing failure'),(5,'Installation error','CDIE',1,1,'Installation or assembly failure (assembly after maintenance not included)'),(6,'Off-design service','',1,NULL,'Off-design or unintended service conditions, '),(7,'Operating error','COPE',1,NULL,'Mistake, misuse, negligence, oversights, etc. during operation'),(8,'Maintenance error','CMNE',1,NULL,'Mistake, errors, negligence, oversights, etc. during maintenance'),(9,'Expected wear and tear','',1,NULL,'Failure caused by wear and tear resulting from normal operation of the equipment unit'),(10,'Documentation error','CMDE',1,1,'Failure related to procedures, specifications'),(11,'Management error','CMME',1,1,'Failure related to planning, organization, quality assurance, etc.'),(12,'Life Time of Material','CMMQ',NULL,1,NULL),(13,'Site Instructions','CMSI',NULL,1,NULL),(14,'Lack of Maintenance Control','CMMC',NULL,1,NULL),(15,'Lack of Maintenance Method','CMMM',NULL,1,NULL),(16,'Lack of Technician Knowledge','CMTK',NULL,1,NULL),(18,'Lack of Operation Control','COOC',NULL,1,NULL),(19,'Operation Beyond Design','COOD',NULL,1,NULL),(20,'Wrong Operation','COOE',NULL,1,NULL),(21,'Lack Of Operation Knowledge','COOK',NULL,1,NULL),(61,'Other','COTH',NULL,1,NULL),(63,'Lack of Tools','CMLT',NULL,1,NULL);
/*!40000 ALTER TABLE `cause` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `damage`
--

DROP TABLE IF EXISTS `damage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `damage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode` varchar(5) NOT NULL,
  `nama` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `kode_UNIQUE` (`kode`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `damage`
--

LOCK TABLES `damage` WRITE;
/*!40000 ALTER TABLE `damage` DISABLE KEYS */;
INSERT INTO `damage` VALUES (1,'BEND','Bend (Bengkok)'),(2,'BROK','Broken (Patah)'),(3,'BRUN','Burnt (Terbakar)'),(4,'CAVI','Cavitation'),(5,'CLOG','Clogged / Blocked (Tersumbat)'),(6,'CONT','Contaminated'),(7,'CORR','Corroded (Korosi)'),(8,'CRAK','Cracked (Retak)'),(9,'DEFF','Defective (Cacat)'),(10,'DEFO','Deformed (Berubah bentuk)'),(11,'DIRT','Dirty (Kotor)'),(12,'IMBL','Imbalance (Tidak Balance)'),(13,'JAMM','Jammed (Macet)'),(14,'KNOC','Knocking'),(15,'LEAK','Leak (Bocor)'),(16,'NDMG','No Damage'),(17,'SHCR','Short-Circuited'),(18,'WET','Wet'),(19,'WORN','Worn Out (Aus)');
/*!40000 ALTER TABLE `damage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equip`
--

DROP TABLE IF EXISTS `equip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `equip` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(45) NOT NULL,
  `kode` varchar(8) DEFAULT NULL,
  `tag` varchar(45) DEFAULT NULL,
  `unit_id` int(11) DEFAULT NULL,
  `lok` tinyint(4) DEFAULT NULL,
  `strh` tinyint(4) DEFAULT NULL,
  `cat` tinyint(4) DEFAULT NULL,
  `flag` int(11) DEFAULT NULL,
  `initrh` int(10) unsigned DEFAULT NULL,
  `totrh` int(10) unsigned DEFAULT NULL,
  `ket` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equip`
--

LOCK TABLES `equip` WRITE;
/*!40000 ALTER TABLE `equip` DISABLE KEYS */;
INSERT INTO `equip` VALUES (31,'COMPRESSOR ARIEL JGE2 GAS SALES','COMP','K-A01A16001',54,NULL,NULL,8,NULL,NULL,NULL,NULL),(32,'ENGINE CAT G3508','ENG','KE-A01A16001',54,NULL,NULL,10,NULL,NULL,NULL,NULL),(33,'COMPRESSOR ARIEL JGE2 GAS SALES','COMP','K-A01A16002',55,NULL,NULL,8,NULL,NULL,NULL,NULL),(34,'ENGINE CAT G3508','ENG','KE-A01A16002',55,NULL,NULL,10,NULL,NULL,NULL,NULL),(35,'COMPRESSOR ARIEL JGE2 GAS SALES','COMP','K-A01A16003',56,NULL,NULL,8,NULL,NULL,NULL,NULL),(36,'ENGINE CAT G3508','ENG','KE-A01A16006',56,NULL,NULL,10,NULL,NULL,NULL,NULL),(37,'COMPRESSOR ARIEL JGE2 GAS SALES','COMP','K-A01A09002',48,NULL,NULL,8,NULL,NULL,NULL,NULL),(38,'ENGINE CAT G3508','ENG','KE-A01A09002',48,NULL,NULL,10,NULL,NULL,NULL,NULL),(39,'COMPRESSOR JGE2 GAS SALES','COMP','K-A01A09003',49,NULL,NULL,8,NULL,NULL,NULL,NULL),(40,'ENGINE CAT G3512','ENG','KE-A01A09003',49,NULL,NULL,10,NULL,NULL,NULL,NULL),(41,'COMPRESSOR JGT2 GAS SALES','COMP','K-A01A09004',50,NULL,NULL,8,NULL,NULL,NULL,NULL),(42,'ENGINE CAT G3512','ENG','KE-A01A09004',50,NULL,NULL,10,NULL,NULL,NULL,NULL),(43,'COMPRESSOR ARIEL JGE4 GAS SALES','COMP','K-A01A20001',51,NULL,NULL,8,NULL,NULL,NULL,NULL),(44,'ENGINE CAT G3516','ENG','KE-A01A20001',51,NULL,NULL,10,NULL,NULL,NULL,NULL),(45,'ENGINE CAT G3508','ENG','PE-A01A06004',113,NULL,NULL,10,NULL,NULL,NULL,NULL),(46,'GENERATOR CAT SR4','GEN','PG-A01A06004',113,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(47,'GENERATOR CAT SR4','GEN','PG-A01A06002',114,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(48,'ENGINE CAT G398','ENG','PE-A01A06002',114,NULL,NULL,11,NULL,NULL,NULL,NULL),(49,'ENGINE CAT G3408','ENG','PE-A01A06005',115,NULL,NULL,12,NULL,NULL,NULL,NULL),(50,'GENERATOR CAT SR4','GEN','PG-A01A06005',115,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(51,'PUMP GASO 1700','PUMP','G-A01A09001',110,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(52,'PUMP GD FDXDG','PUMP','G-A01A09002',111,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(53,'ENGINE CAT G342','ENG','GE-A01A09002',111,NULL,NULL,12,NULL,NULL,NULL,NULL),(54,'ENGINE AJAX DPC 600','ENG','KE-A01A05006',27,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(55,'COMPRESSOR AJAX DPC 600','COMP','K-A01A05006',27,NULL,NULL,9,NULL,NULL,NULL,NULL),(56,'ENGINE AJAX DPC 600','ENG','KE-A01A05003',28,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(57,'COMPRESSOR AJAX DPC 600','COMP','K-A01A05003',28,NULL,NULL,9,NULL,NULL,NULL,NULL),(58,'ENGINE AJAX DPC 600','ENG','KE-A01A05007',29,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(59,'COMPRESSOR AJAX DPC 600','COMP','K-A01A05007',29,NULL,NULL,9,NULL,NULL,NULL,NULL),(60,'ENGINE CAT G3306','ENG','GE-A01A06001',81,NULL,NULL,12,NULL,NULL,NULL,NULL),(61,'GENERATOR CAT SR4','GEN','PG-A01A05002',81,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(62,'ENGINE CAT G3306','ENG','PE-A01A02002',82,NULL,NULL,12,NULL,NULL,NULL,NULL),(63,'GENERATOR CAT SR4','GEN','PG-A01A02002',82,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(64,'PUMP GASO 1847A','PUMP','G-A01A05015',65,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(65,'ELMOT 25HP','ELM','GM-A01A01001',65,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(66,'PUMP GASO 1847-A','PUMP','G-A01A01004',66,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(67,'ELMOT 30HP','ELM','GM-A01A01003',66,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(68,'PUMP GASO 3671','PUMP','G-A01A05018',71,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(69,'ENGINE CAT G3306','ENG','PE-A01A00001',71,NULL,NULL,12,NULL,NULL,NULL,NULL),(70,'PUMP GASO 3776','PUMP','G-A01A09001',72,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(71,'ENGINE CAT G342','ENG','GE-A01A09002',72,NULL,NULL,12,NULL,NULL,NULL,NULL),(72,'COMPRESSOR AJAX DPC 600','COMP','K-A01A05004',40,NULL,NULL,9,NULL,NULL,NULL,NULL),(73,'ENGINE AJAX DPC 600','ENG','KE-A01A05004',40,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(74,'COMPRESSOR AJAX DPC 600','COMP','K-A01A05005',41,NULL,NULL,9,NULL,NULL,NULL,NULL),(75,'ENGINE AJAX DPC 600','ENG','KE-A01A05005',41,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(76,'COMPRESSOR GAS DR6HS2','COMP','K-A02A08001',42,NULL,NULL,9,NULL,NULL,NULL,NULL),(77,'ENGINE WAUKESHA L5790GSI','ENG','KE-A02A08001',42,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(78,'COMPRESSOR GAS DR6HS2','COMP','K-A02A08002',43,NULL,NULL,9,NULL,NULL,NULL,NULL),(79,'ENGINE WAUKESHA L5790GSI','ENG','KE-A02A08002',43,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(80,'GENERATOR IDEAL ELECTRIC SAB ERTMA280035 ','GEN','PG-A01A05004',119,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(81,'TURBINE KDP KG 2-3C','TURB','PGT-A01A05004',119,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(82,'ENGINE CAT G3508','ENG','PE-A01A03004',92,NULL,NULL,10,NULL,NULL,NULL,NULL),(83,'GENERATOR CAT SR4','GEN','PG-A01A03004',92,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(84,'ENGINE CAT G398','ENG','PE-A01A03003',91,NULL,NULL,11,NULL,NULL,NULL,NULL),(85,'GENERATOR CAT SR4','GEN','PG-A01A06001',91,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(86,'COMPRESSOR DR KOA4','COMP','K-A01A03003',34,NULL,NULL,9,NULL,NULL,NULL,NULL),(87,'ENGINE CAT G398','ENG','PE-A01B06004',34,NULL,NULL,11,NULL,NULL,NULL,NULL),(88,'ENGINE CAT G398','ENG','GE-A01A05002',35,NULL,NULL,11,NULL,NULL,NULL,NULL),(89,'GAS COMPRESSOR DR KOA4','COMP','K-A01A03004',35,NULL,NULL,9,NULL,NULL,NULL,NULL),(90,'COMPRESSSOR ARIEL JGE2','COMP','K-A01A03005',36,NULL,NULL,8,NULL,NULL,NULL,NULL),(91,'ENGINE CAT G3512','ENG','KE-A01A03005',36,NULL,NULL,10,NULL,NULL,NULL,NULL),(92,'COMPRESSOR ARIEL JGE2','COMP','K-A01A03006',37,NULL,NULL,8,NULL,NULL,NULL,NULL),(93,'ENGINE CAT G3512','ENG','KE-A01A03006',37,NULL,NULL,10,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `equip` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `down_id` int(11) unsigned NOT NULL,
  `unit` int(11) DEFAULT NULL,
  `eq` int(11) NOT NULL,
  `opart` tinyint(4) DEFAULT NULL,
  `fm` varchar(20) DEFAULT NULL,
  `cause` int(11) DEFAULT NULL,
  `aksi` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (4,96,NULL,36,13,'ERO',1,3),(5,95,NULL,35,8,'HIO',4,4),(6,116,NULL,34,10,'VIB',3,4),(7,133,NULL,36,10,'NOI',3,4),(8,132,NULL,35,6,'LOO',1,3),(9,147,NULL,36,15,'VIB',3,2),(10,147,NULL,36,15,'VIB',3,2),(11,145,NULL,35,6,'OHE',2,4),(12,145,NULL,35,6,'OHE',2,4),(13,148,NULL,39,6,'AIR',18,3),(14,148,NULL,39,7,'OHE',2,4),(15,180,NULL,31,7,'OHE',2,4),(16,183,NULL,32,14,'VIB',14,2),(17,392,NULL,35,8,'OHE',3,3),(18,398,NULL,31,7,'OHE',3,1);
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventPDM`
--

DROP TABLE IF EXISTS `eventPDM`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `eventPDM` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `unit_id` int(11) NOT NULL DEFAULT '0',
  `waktu` datetime DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `report_url` varchar(60) DEFAULT NULL,
  `ket` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventPDM`
--

LOCK TABLES `eventPDM` WRITE;
/*!40000 ALTER TABLE `eventPDM` DISABLE KEYS */;
/*!40000 ALTER TABLE `eventPDM` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failuremode`
--

DROP TABLE IF EXISTS `failuremode`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failuremode` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode` varchar(45) DEFAULT NULL,
  `cat` int(11) DEFAULT NULL,
  `nama` varchar(45) DEFAULT NULL,
  `ket` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failuremode`
--

LOCK TABLES `failuremode` WRITE;
/*!40000 ALTER TABLE `failuremode` DISABLE KEYS */;
INSERT INTO `failuremode` VALUES (14,'AIR',8,'Abnormal Instrument Reading','C'),(15,'OHE',8,'Overheating','C'),(16,'INL',8,'Internal Leakage','C'),(17,'LOO',8,'Low Output','C'),(18,'HIO',8,'High Output','C'),(19,'FTS',8,'Fail To Start','C'),(20,'AIR',10,'Abnormal Instrument Reading','E'),(21,'VIB',10,'Vibration','E'),(22,'ERO',10,'Erratic','E'),(23,'NOI',10,'Noise','E'),(24,'PDE',10,'Parameter Deviation','E'),(25,'OHE',10,'Overheating','E');
/*!40000 ALTER TABLE `failuremode` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hir_unit`
--

DROP TABLE IF EXISTS `hir_unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hir_unit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hir_id` int(11) NOT NULL DEFAULT '0',
  `unit_id` varchar(45) DEFAULT NULL,
  `ket` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hir_unit`
--

LOCK TABLES `hir_unit` WRITE;
/*!40000 ALTER TABLE `hir_unit` DISABLE KEYS */;
/*!40000 ALTER TABLE `hir_unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hirarki`
--

DROP TABLE IF EXISTS `hirarki`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hirarki` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(45) NOT NULL,
  `parent` int(11) NOT NULL DEFAULT '0',
  `level` tinyint(4) DEFAULT NULL,
  `kode` varchar(10) DEFAULT NULL,
  `flag` int(11) DEFAULT NULL,
  `urut` tinyint(4) DEFAULT NULL,
  `ket` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=145 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hirarki`
--

LOCK TABLES `hirarki` WRITE;
/*!40000 ALTER TABLE `hirarki` DISABLE KEYS */;
INSERT INTO `hirarki` VALUES (1,'Soka',0,1,'SKA',NULL,6,NULL),(2,'Jene',0,1,'JNE',NULL,5,NULL),(3,'Rambutan',0,1,'RBT',NULL,2,NULL),(4,'Gunung Kembang',0,1,'GKB',NULL,9,NULL),(5,'Lagan',0,1,'LGN',NULL,0,NULL),(6,'Teras',0,1,'TRS',NULL,3,NULL),(7,'Koneng',0,1,'KNG',NULL,20,NULL),(8,'Ibul',0,1,'IBL',NULL,1,NULL),(9,'Pengabuan',0,1,'PGB',NULL,14,NULL),(10,'Matra',0,1,NULL,NULL,12,NULL),(11,'Serdang',0,1,NULL,NULL,4,NULL),(12,'Compressor',1,2,NULL,NULL,NULL,NULL),(13,'Genset',1,2,NULL,NULL,NULL,NULL),(14,'Pump',1,2,NULL,NULL,NULL,NULL),(15,'Compressor',3,2,NULL,NULL,NULL,NULL),(16,'Compressor',5,2,NULL,NULL,NULL,NULL),(17,'Compressor',6,2,NULL,NULL,NULL,NULL),(18,'Compressor',7,2,NULL,NULL,NULL,NULL),(19,'Compressor',4,2,NULL,NULL,NULL,NULL),(20,'Compressor',2,2,NULL,NULL,NULL,NULL),(21,'Gas Compressor #1',16,3,NULL,5,NULL,'lagan'),(22,'Gas Compressor #2',16,3,NULL,5,NULL,'lagan'),(23,'Gas Compressor #3',16,3,NULL,5,NULL,'lagan'),(24,'Gas Compressor #4',16,3,NULL,5,NULL,'lagan'),(25,'Gas Compressor #5',16,3,NULL,5,NULL,'lagan'),(26,'Gas Compressor #6',16,3,NULL,5,NULL,'lagan'),(27,'Gas Compressor #1',30,3,NULL,5,NULL,'ibul'),(28,'Gas Compressor #2',30,3,NULL,5,NULL,'ibul'),(29,'Gas Compressor #3',30,3,NULL,5,NULL,'ibul'),(30,'Compressor',8,2,NULL,NULL,NULL,NULL),(31,'Gas Compressor #1',15,3,NULL,5,NULL,'rambutan'),(32,'Gas Compressor #2',15,3,NULL,5,NULL,'rambutan'),(33,'Gas Compressor #3',15,3,NULL,5,NULL,'rambutan'),(34,'Gas Compressor #1',17,3,NULL,5,NULL,'teras'),(35,'Gas Compressor #2',17,3,NULL,5,NULL,'teras'),(36,'Gas Compressor #3',17,3,NULL,5,NULL,'teras'),(37,'Gas Compressor #4',17,3,NULL,5,NULL,'teras'),(38,'Gas Compressor #4',15,3,NULL,5,NULL,'rambutan'),(39,'Gas Compressor #5',15,3,NULL,5,NULL,'rambutan'),(40,'Gas Compressor #1',20,3,NULL,5,NULL,'jene'),(41,'Gas Compressor #2',20,3,NULL,5,NULL,'jene'),(42,'Gas Compressor #4',20,3,NULL,5,NULL,'jene'),(43,'Gas Compressor #5',20,3,NULL,5,NULL,'jene'),(44,'Gas Compressor #1',12,3,NULL,5,NULL,'soka'),(45,'Gas Compressor #2',12,3,NULL,5,NULL,'soka'),(46,'Gas Compressor #3',12,3,NULL,5,NULL,'soka'),(47,'Gas Compressor #4',12,3,NULL,5,NULL,'soka'),(48,'Gas Compressor #1',19,3,NULL,5,NULL,'gunung kembang'),(49,'Gas Compressor #2',19,3,NULL,5,NULL,'gunung kembang'),(50,'Gas Compressor #3',19,3,NULL,5,NULL,'gunung kembang'),(51,'Gas Compressor #4',19,3,NULL,5,NULL,'gunung kembang'),(52,'Borang',0,1,NULL,NULL,16,NULL),(53,'Compressor',52,2,NULL,NULL,NULL,NULL),(54,'Gas Compressor #1',53,3,NULL,5,NULL,'borang'),(55,'Gas Compressor #2',53,3,NULL,5,NULL,'borang'),(56,'Gas Compressor #3',53,3,NULL,5,NULL,'borang'),(57,'Gas Compressor #2',18,3,NULL,5,NULL,'koneng'),(58,'Pump',5,2,NULL,NULL,NULL,''),(59,'Crude Transfer Pump #1',58,3,NULL,6,NULL,'lagan'),(60,'Crude Transfer Pump #2',58,3,NULL,6,NULL,'lagan'),(61,'Genset',5,2,NULL,NULL,NULL,NULL),(62,'Generator Set #1',61,3,NULL,7,NULL,'lagan'),(63,'Generator Set #2',61,3,NULL,7,NULL,'lagan'),(64,'Pump',8,2,NULL,NULL,NULL,''),(65,'Crude Transfer Pump #1',64,3,NULL,6,NULL,'ibul'),(66,'Crude Transfer Pump #2',64,3,NULL,6,NULL,'ibul'),(71,'Water Injection Pump #1',64,3,NULL,6,NULL,'ibul'),(72,'Water Injection Pump #2',64,3,NULL,6,NULL,'ibul'),(73,'Pump',3,2,NULL,NULL,NULL,NULL),(74,'Crude Transfer Pump #1',73,3,NULL,6,NULL,'rambutan'),(75,'Crude Transfer Pump #2',73,3,NULL,6,NULL,'rambutan'),(76,'Genset',3,2,NULL,NULL,NULL,NULL),(77,'Generator Set #1',76,3,NULL,7,NULL,'rambutan'),(78,'Generator Set #2',76,3,NULL,7,NULL,'rambutan'),(79,'Generator Set #3',76,3,NULL,7,NULL,'rambutan'),(80,'Genset',8,2,NULL,NULL,NULL,NULL),(81,'Generator Set #1',80,3,NULL,7,NULL,'ibul'),(82,'Generator Set #2',80,3,NULL,7,NULL,'ibul'),(84,'Pump',6,2,NULL,NULL,NULL,NULL),(85,'Crude Transfer Pump #1',84,3,NULL,6,NULL,'teras'),(86,'Crude Transfer Pump #2',84,3,NULL,6,NULL,'teras'),(87,'Crude Transfer Pump #3',84,3,NULL,6,NULL,'teras'),(88,'Crude Transfer Pump #4',84,3,NULL,6,NULL,'teras'),(89,'Water Transfer Pump #1',84,3,NULL,6,NULL,'teras'),(90,'Genset',6,2,NULL,NULL,NULL,NULL),(91,'Generator Set #1',90,3,NULL,7,NULL,'teras'),(92,'Generator Set #2',90,3,NULL,7,NULL,'teras'),(93,'Pump',11,2,NULL,NULL,NULL,NULL),(94,'Crude Transfer Pump #1',93,3,NULL,6,NULL,'serdang'),(95,'Crude Transfer Pump #2',93,3,NULL,6,NULL,'serdang'),(96,'Crude Transfer Pump #3',93,3,NULL,6,NULL,'serdang'),(97,'Crude Transfer Pump #4',93,3,NULL,6,NULL,'serdang'),(98,'Crude Transfer Pump #5',93,3,NULL,6,NULL,'serdang'),(99,'Crude Transfer Pump #6',93,3,NULL,6,NULL,'serdang'),(100,'Feeder Pump #1',93,3,NULL,6,NULL,'serdang'),(101,'Pump',2,2,NULL,NULL,NULL,NULL),(102,'Water Injection Pump #1',101,3,NULL,6,NULL,'jene'),(103,'Water Injection Pump #2',101,3,NULL,6,NULL,'jene'),(104,'Water Injection Pump #3',101,3,NULL,6,NULL,'jene'),(105,'Water Injection Pump #4',101,3,NULL,6,NULL,'jene'),(106,'Water Injection Pump #5',101,3,NULL,6,NULL,'jene'),(107,'Water Injection Pump #6',101,3,NULL,6,NULL,'jene'),(108,'Water Injection Pump #7',101,3,NULL,6,NULL,'jene'),(109,'Pump',4,2,NULL,NULL,NULL,NULL),(110,'Crude Transfer Pump #1',109,3,NULL,6,NULL,NULL),(111,'Crude Transfer Pump #2',109,3,NULL,6,NULL,NULL),(112,'Genset',4,2,NULL,NULL,NULL,NULL),(113,'Generator Set #1',112,3,NULL,7,NULL,NULL),(114,'Generator Set #2',112,3,NULL,7,NULL,NULL),(115,'Generator Set #3',112,3,NULL,7,NULL,NULL),(116,'Crude Transfer Pump #1',101,3,NULL,6,NULL,NULL),(117,'Crude Transfer Pump #3',101,3,NULL,6,NULL,NULL),(118,'Genset',2,2,NULL,NULL,NULL,NULL),(119,'Generator Set #1',118,3,NULL,7,NULL,NULL),(120,'Generator Set #2',118,3,NULL,7,NULL,NULL),(121,'Generator Set #3',118,3,NULL,7,NULL,NULL),(122,'Genset',7,2,NULL,NULL,NULL,NULL),(123,'Generator Set #1',122,3,NULL,7,NULL,NULL),(124,'Generator Set #2',122,3,NULL,7,NULL,NULL),(125,'Pump',7,2,NULL,NULL,NULL,NULL),(126,'Crude Transfer Pump #1',125,3,NULL,6,NULL,NULL),(127,'Pump',10,2,NULL,NULL,NULL,NULL),(128,'Genset',10,2,NULL,NULL,NULL,NULL),(129,'Crude Transfer Pump #1',127,3,NULL,6,NULL,NULL),(130,'Crude Transfer Pump #2',127,3,NULL,6,NULL,NULL),(131,'Crude Transfer Pump #3',127,3,NULL,6,NULL,NULL),(132,'Crude Transfer Pump #4',127,3,NULL,6,NULL,NULL),(133,'Generator Set #1',128,3,NULL,7,NULL,NULL),(134,'Generator Set #2',128,3,NULL,7,NULL,NULL),(135,'Genset',11,2,NULL,NULL,NULL,NULL),(136,'Generator Set #1',135,3,NULL,7,NULL,NULL),(137,'Generator Set #2',135,3,NULL,7,NULL,NULL),(138,'Gas Compressor #5',12,3,NULL,5,NULL,'soka'),(139,'Generator Set #1',13,3,NULL,7,NULL,NULL),(140,'Generator Set #2',13,3,NULL,7,NULL,NULL),(141,'Generator Set #3',13,3,NULL,7,NULL,NULL),(142,'Crude Transfer Pump #1',14,3,NULL,6,NULL,NULL),(143,'Crude Transfer Pump #2',14,3,NULL,6,NULL,NULL),(144,'Crude Transfer Pump #3',14,3,NULL,6,NULL,NULL);
/*!40000 ALTER TABLE `hirarki` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jamkerja`
--

DROP TABLE IF EXISTS `jamkerja`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jamkerja` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rh` float DEFAULT NULL,
  `unit_id` tinyint(4) DEFAULT NULL,
  `waktu` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jamkerja`
--

LOCK TABLES `jamkerja` WRITE;
/*!40000 ALTER TABLE `jamkerja` DISABLE KEYS */;
/*!40000 ALTER TABLE `jamkerja` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `listEvent`
--

DROP TABLE IF EXISTS `listEvent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `listEvent` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(45) DEFAULT NULL,
  `ket` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listEvent`
--

LOCK TABLES `listEvent` WRITE;
/*!40000 ALTER TABLE `listEvent` DISABLE KEYS */;
INSERT INTO `listEvent` VALUES (1,'Stand By',NULL),(2,'PM',NULL),(3,'Corrective',NULL),(4,'Breakdown',NULL);
/*!40000 ALTER TABLE `listEvent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `opart`
--

DROP TABLE IF EXISTS `opart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `opart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cat` tinyint(4) DEFAULT NULL,
  `kode` varchar(5) DEFAULT NULL,
  `nama` varchar(45) DEFAULT NULL,
  `obama` tinyint(4) DEFAULT NULL,
  `sap` tinyint(4) DEFAULT NULL,
  `ket` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1357 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `opart`
--

LOCK TABLES `opart` WRITE;
/*!40000 ALTER TABLE `opart` DISABLE KEYS */;
INSERT INTO `opart` VALUES (1,8,NULL,'GearBox Power Trasmission',1,NULL,NULL),(2,8,NULL,'Bearing Power Trasmission',1,NULL,NULL),(3,8,NULL,'Coupling Power Trasmission',1,NULL,NULL),(4,8,NULL,'Casing Compressor',1,NULL,NULL),(5,8,NULL,'Rotor Compressor',1,NULL,NULL),(6,8,NULL,'Piston Compressor',1,NULL,NULL),(7,8,NULL,'Valve Compressor',1,NULL,NULL),(8,8,NULL,'Instrument Lub',1,NULL,NULL),(9,8,NULL,'Seal Lub',1,NULL,NULL),(10,10,NULL,'Pump Engine',1,NULL,NULL),(11,10,NULL,'Instrument Starting',1,NULL,NULL),(12,10,NULL,'Piston Engine',1,NULL,NULL),(13,10,NULL,'Piping Engine',1,NULL,NULL),(14,10,NULL,'Injection Engine',1,NULL,NULL),(15,10,NULL,'Pump Lub',1,NULL,NULL),(16,10,NULL,'Filter Lub',1,NULL,NULL),(17,10,NULL,'Valve Engine',1,NULL,NULL),(18,10,NULL,'Valve Lub',1,NULL,NULL),(19,10,NULL,'Pump Cooling',1,NULL,NULL),(20,10,NULL,'Filter Cooling',1,NULL,NULL),(21,NULL,'BNUT','Bolt & Nut Set',NULL,1,NULL),(22,NULL,'BOLT','Bolt',NULL,1,NULL),(23,NULL,'BRNG','Bearing',NULL,1,NULL),(24,NULL,'BUSH','Bushing',NULL,1,NULL),(25,NULL,'DIVV','Valve Discharge',NULL,1,NULL),(26,NULL,'ELMT','Element',NULL,1,NULL),(27,NULL,'GAUG','Gauge',NULL,1,NULL),(28,NULL,'GSKT','Gasket',NULL,1,NULL),(29,NULL,'HBRG','Housing Bearing',NULL,1,NULL),(30,NULL,'HOSE','Hose',NULL,1,NULL),(31,NULL,'ICTR','Indicator (Press, Temp, Flow, Level)',NULL,1,NULL),(32,NULL,'IMPL','Impeller',NULL,1,NULL),(33,NULL,'LPMP','Oil Pump',NULL,1,NULL),(34,NULL,'LUBE','Lube Oil',NULL,1,NULL),(35,NULL,'LUBR','Lubricator',NULL,1,NULL),(36,NULL,'NUTT','Nut',NULL,1,NULL),(37,NULL,'OCLR','Oil Cooler',NULL,1,NULL),(38,NULL,'OFLT','Oil Filter',NULL,1,NULL),(39,NULL,'OPRS','Oil Pressure',NULL,1,NULL),(40,NULL,'ORNG','O-Ring',NULL,1,NULL),(41,NULL,'OSEL','Oil Seal',NULL,1,NULL),(42,NULL,'OSLV','O-Ring-Sleeve',NULL,1,NULL),(43,NULL,'OTHR','Other',NULL,1,NULL),(44,NULL,'PIND','Press Indicator',NULL,1,NULL),(45,NULL,'PIPE','Pipe',NULL,1,NULL),(46,NULL,'REGT','Regulator',NULL,1,NULL),(47,NULL,'RING','Ring',NULL,1,NULL),(48,NULL,'ROTR','Rotor Assembly',NULL,1,NULL),(49,NULL,'SCVV','Suction Control Valve',NULL,1,NULL),(50,NULL,'SEAL','Seal',NULL,1,NULL),(51,NULL,'SHFT','Shaft',NULL,1,NULL),(52,NULL,'SHIM','Shim',NULL,1,NULL),(53,NULL,'SLVE','Sleeve',NULL,1,NULL),(54,NULL,'SOIL','Screen Oil',NULL,1,NULL),(55,NULL,'SPCR','Spacer',NULL,1,NULL),(56,NULL,'SPRG','Spring',NULL,1,NULL),(57,NULL,'SUCT','Inlet / Suction Line',NULL,1,NULL),(58,NULL,'SUVV','Valve Suction',NULL,1,NULL),(59,NULL,'VLVE','Valve',NULL,1,NULL),(60,NULL,'ADTR','Adaptor',NULL,1,NULL),(61,NULL,'BBRG','Intermediate Bowl Bearing',NULL,1,NULL),(62,NULL,'BLDC','Balance Disc',NULL,1,NULL),(63,NULL,'BLDR','Balance Drum',NULL,1,NULL),(64,NULL,'BLPL','Balance Plate',NULL,1,NULL),(65,NULL,'BNUT','Bolt & Nut Set',NULL,1,NULL),(66,NULL,'BOLT','Bolt',NULL,1,NULL),(67,NULL,'BRNG','Bearing',NULL,NULL,NULL),(68,NULL,'BSEL','Mechanical Seal Basic',NULL,NULL,NULL),(69,NULL,'BUSH','Bushing',NULL,NULL,NULL),(70,NULL,'BXXR','Backing Ring',NULL,NULL,NULL),(71,NULL,'CAWR','Case Wearing',NULL,NULL,NULL),(72,NULL,'CHVV','Check Valve',NULL,NULL,NULL),(73,NULL,'COBE','Cover Bearing',NULL,NULL,NULL),(74,NULL,'COCO','Cover Coupling',NULL,NULL,NULL),(75,NULL,'COVA','Cover Valve',NULL,NULL,NULL),(76,NULL,'COVR','Cover',NULL,NULL,NULL),(77,NULL,'CPIN','Cotter Pin',NULL,NULL,NULL),(78,NULL,'CPLG','Coupling',NULL,NULL,NULL),(79,NULL,'CSNG','Casing',NULL,NULL,NULL),(80,NULL,'DCVV','Discharge Control Valve',NULL,NULL,NULL),(81,NULL,'DIFS','Diffuser',NULL,NULL,NULL),(82,NULL,'DISC','Disc',NULL,NULL,NULL),(83,NULL,'DIVV','Valve Discharge',NULL,NULL,NULL),(84,NULL,'DIWE','Diffusor Wearing',NULL,NULL,NULL),(85,NULL,'DOWL','Dowel Pin',NULL,NULL,NULL),(86,NULL,'DSCH','Outlet / Discharge Line',NULL,NULL,NULL),(87,NULL,'ELMT','Element',NULL,NULL,NULL),(88,NULL,'FOUN','Foundation',NULL,NULL,NULL),(89,NULL,'FRAM','Frame',NULL,1,NULL),(90,NULL,'GAUG','Gauge',NULL,1,NULL),(91,NULL,'GLAN','Gland',NULL,1,NULL),(92,NULL,'GLAS','Glass Oiler',NULL,1,NULL),(93,NULL,'GMSL','Gland Mech. Seal',NULL,1,NULL),(94,NULL,'GSKT','Gasket',NULL,1,NULL),(95,NULL,'HBRG','Housing Bearing',NULL,1,NULL),(96,NULL,'HOSE','Hose',NULL,1,NULL),(97,NULL,'HSNG','Housing',NULL,1,NULL),(98,NULL,'HUBC','Hub Coupling',NULL,1,NULL),(99,NULL,'ICTR','Indicator (Press, Temp, Flow, Level)',NULL,1,NULL),(100,NULL,'IMPL','Impeller',NULL,1,NULL),(101,NULL,'INSL','Insulation',NULL,1,NULL),(102,NULL,'INSR','Insulator',NULL,1,NULL),(103,NULL,'IPIT','Intake Pit',NULL,1,NULL),(104,NULL,'JOIN','Flexible Joint',NULL,1,NULL),(105,NULL,'LBRY','Labirynth',NULL,NULL,NULL),(106,NULL,'LNKG','Linkage',NULL,NULL,NULL),(107,NULL,'LOCK','Impeller Lock Collet',NULL,NULL,NULL),(108,NULL,'LPMP','Oil Pump',NULL,NULL,NULL),(109,NULL,'LSEL','Labyrinth Seal',NULL,NULL,NULL),(110,NULL,'LUBR','Lubricator',NULL,NULL,NULL),(111,NULL,'MBLW','Metal Bellows Mech. Seal',NULL,NULL,NULL),(112,NULL,'MSEL','Mechanical Seal Assembly',NULL,NULL,NULL),(113,NULL,'NUTT','Nut',NULL,NULL,NULL),(114,NULL,'ORNG','O-Ring',NULL,NULL,NULL),(115,NULL,'OSEL','Oil Seal',NULL,NULL,NULL),(116,NULL,'OSLV','O-Ring-Sleeve',NULL,NULL,NULL),(117,NULL,'OTHR','Other',NULL,NULL,NULL),(118,NULL,'PCKG','Packing / Gland Packing',NULL,NULL,NULL),(119,NULL,'PCKX','Packing Set Stuffing Box',NULL,NULL,NULL),(120,NULL,'PFON','Pump Foundation',NULL,NULL,NULL),(121,NULL,'PIND','Press Indicator',NULL,NULL,NULL),(122,NULL,'PINN','Pin',NULL,NULL,NULL),(123,NULL,'PIPE','Pipe',NULL,NULL,NULL),(124,NULL,'PLNG','Plunger',NULL,NULL,NULL),(125,NULL,'RBLW','Rubber Bellows Mech. Seal',NULL,NULL,NULL),(126,NULL,'RVLV','Relief Valve',NULL,NULL,NULL),(127,NULL,'SCVV','Suction Control Valve',NULL,NULL,NULL),(128,NULL,'SEAL','Seal',NULL,NULL,NULL),(129,NULL,'SHFT','Shaft',NULL,NULL,NULL),(130,NULL,'SHIM','Shim',NULL,NULL,NULL),(131,NULL,'SLVE','Sleeve',NULL,NULL,NULL),(132,NULL,'SPRG','Spring',NULL,NULL,NULL),(133,NULL,'SSLV','Spacer Sleeve',NULL,NULL,NULL),(134,NULL,'STRN','Strainers',NULL,NULL,NULL),(135,NULL,'STUD','Stud',NULL,NULL,NULL),(136,NULL,'SUCT','Inlet / Suction Line',NULL,NULL,NULL),(137,NULL,'SUVV','Valve Suction',NULL,NULL,NULL),(138,NULL,'VLVE','Valve',NULL,NULL,NULL),(139,NULL,'WASH','Washer',NULL,NULL,NULL),(140,NULL,'WXXR','Wearing Ring',NULL,NULL,NULL),(141,NULL,'XBOX','Stuffing Box',NULL,NULL,NULL),(142,NULL,'XGBX','Gland Stuffing Box',NULL,NULL,NULL),(143,NULL,'ALRM','Alarm',NULL,NULL,NULL),(144,NULL,'AMMT','Ampere Meter',NULL,NULL,NULL),(145,NULL,'BKER','Circuit Breaker',NULL,NULL,NULL),(146,NULL,'BZER','Buzzer',NULL,NULL,NULL),(147,NULL,'CALB','Calibrator',NULL,NULL,NULL),(148,NULL,'CONT','Contactor',NULL,NULL,NULL),(149,NULL,'DIOD','Diode',NULL,NULL,NULL),(150,NULL,'ELLI','Electrical Line',NULL,NULL,NULL),(151,NULL,'FUSE','Fuse',NULL,NULL,NULL),(152,NULL,'GAUG','Gauge',NULL,NULL,NULL),(153,NULL,'GRND','Grounding Cable',NULL,NULL,NULL),(154,NULL,'GSKT','Gasket',NULL,NULL,NULL),(155,NULL,'HETR','Heater',NULL,NULL,NULL),(156,NULL,'INSL','Insulation',NULL,NULL,NULL),(157,NULL,'INSR','Insulator',NULL,NULL,NULL),(158,NULL,'LPRO','Lightening Protector',NULL,NULL,NULL),(159,NULL,'MOTR','Motor',NULL,NULL,NULL),(160,NULL,'OCRY','Over Current Relay',NULL,NULL,NULL),(161,NULL,'OHRY','Overheat Protector Relay',NULL,NULL,NULL),(162,NULL,'OLRY','Overload Relay',NULL,NULL,NULL),(163,NULL,'OTHR','Other',NULL,NULL,NULL),(164,NULL,'PCBS','Printed Circuit Board',NULL,NULL,NULL),(165,NULL,'SFRM','Stator Frame',NULL,NULL,NULL),(166,NULL,'SGER','Switchgear',NULL,NULL,NULL),(167,NULL,'STRT','Starter',NULL,NULL,NULL),(168,NULL,'STRX','Stator',NULL,NULL,NULL),(169,NULL,'SWIC','Switch',NULL,NULL,NULL),(170,NULL,'SWND','Stator Winding',NULL,NULL,NULL),(171,NULL,'TCPL','Thermocouple',NULL,NULL,NULL),(172,NULL,'TRAF','Transformer',NULL,NULL,NULL),(173,NULL,'VOMT','Volt Meter',NULL,NULL,NULL),(174,NULL,'XDCR','Tranducer',NULL,NULL,NULL),(175,NULL,'XTER','Exciter',NULL,NULL,NULL),(176,NULL,'ACLR','After Cooler',NULL,NULL,NULL),(177,NULL,'ACTR','Actuator',NULL,NULL,NULL),(178,NULL,'ADTR','Adaptor',NULL,NULL,NULL),(179,NULL,'AFLT','Air filter',NULL,NULL,NULL),(180,NULL,'AIRR','AIR',NULL,NULL,NULL),(181,NULL,'ALRM','Alarm',NULL,NULL,NULL),(182,NULL,'ALTR','Alternator',NULL,NULL,NULL),(183,NULL,'AMTR','Air Motor',NULL,NULL,NULL),(184,NULL,'ARMR','Armature',NULL,NULL,NULL),(185,NULL,'ASTR','Air starting',NULL,NULL,NULL),(186,NULL,'ASVV','Valve Assembly',NULL,NULL,NULL),(187,NULL,'BFDC','Baffle Disc',NULL,NULL,NULL),(188,NULL,'BKER','Circuit Breaker / Contractor',NULL,NULL,NULL),(189,NULL,'BLOC','Engine Block',NULL,NULL,NULL),(190,NULL,'BLWR','Blower',NULL,NULL,NULL),(191,NULL,'BNUT','Bolt & Nut Set',NULL,NULL,NULL),(192,NULL,'BOLT','Bolt',NULL,NULL,NULL),(193,NULL,'BRAK','Brake',NULL,NULL,NULL),(194,NULL,'BREK','Breaker',NULL,NULL,NULL),(195,NULL,'BRNG','Bearing',NULL,NULL,NULL),(196,NULL,'BRSP','Bearing Spacer',NULL,NULL,NULL),(197,NULL,'BRTH','Crankcase Breather',NULL,NULL,NULL),(198,NULL,'BRUS','Brushes',NULL,NULL,NULL),(199,NULL,'BUSH','Bushing',NULL,NULL,NULL),(200,NULL,'CABL','Cable',NULL,NULL,NULL),(201,NULL,'CAIN','Chain',NULL,NULL,NULL),(202,NULL,'CBLT','Cog Type Belt',NULL,NULL,NULL),(203,NULL,'CBRT','Carburator',NULL,NULL,NULL),(204,NULL,'CHVV','Check Valve',NULL,NULL,NULL),(205,NULL,'CLNT','Water/SCA Type Coolant',NULL,NULL,NULL),(206,NULL,'CLUC','Clutch',NULL,NULL,NULL),(207,NULL,'COBO','Connecting Rod Bolt',NULL,NULL,NULL),(208,NULL,'COHE','Combustor head',NULL,NULL,NULL),(209,NULL,'COLR','Cooler',NULL,NULL,NULL),(210,NULL,'CONT','Contactor',NULL,NULL,NULL),(211,NULL,'COPI','Crank Pin Bearing',NULL,NULL,NULL),(212,NULL,'COVA','Cover Valve',NULL,NULL,NULL),(213,NULL,'COVR','Cover',NULL,NULL,NULL),(214,NULL,'CPIN','Cotter Pin',NULL,NULL,NULL),(215,NULL,'CPLG','Coupling',NULL,NULL,NULL),(216,NULL,'CRBE','Crankshaft Bearing',NULL,NULL,NULL),(217,NULL,'CROD','Connecting Rod',NULL,NULL,NULL),(218,NULL,'CROI','Crankshaft Oil Seal',NULL,NULL,NULL),(219,NULL,'CSHF','CrankShaft',NULL,NULL,NULL),(220,NULL,'CYHD','Cylinder Head',NULL,NULL,NULL),(221,NULL,'CYLR','Cylinder',NULL,NULL,NULL),(222,NULL,'DISC','Disc',NULL,NULL,NULL),(223,NULL,'DIVV','Valve Discharge',NULL,NULL,NULL),(224,NULL,'DOWL','Dowel Pin',NULL,NULL,NULL),(225,NULL,'DSCH','Outlet / Discharge Line',NULL,NULL,NULL),(226,NULL,'ELMT','Element',NULL,NULL,NULL),(227,NULL,'EPNL','Engine panel',NULL,NULL,NULL),(228,NULL,'ESYS','Electrical Control System',NULL,NULL,NULL),(229,NULL,'FANN','Fan Blade',NULL,NULL,NULL),(230,NULL,'FFAN','FinFan',NULL,NULL,NULL),(231,NULL,'FLTR','Lube / Seal Oil Filter',NULL,NULL,NULL),(232,NULL,'FPRS','Fuel pressure',NULL,NULL,NULL),(233,NULL,'FREG','Fuel regulator',NULL,NULL,NULL),(234,NULL,'FUSE','Fuse',NULL,NULL,NULL),(266,0,'FWHL','Flywheel',NULL,NULL,NULL),(267,0,'GAUG','Gauge',NULL,NULL,NULL),(268,0,'GBOX','Gearbox',NULL,NULL,NULL),(269,0,'GEAR','Gear',NULL,NULL,NULL),(270,0,'GENR','Generator',NULL,NULL,NULL),(271,0,'GLAN','Gland',NULL,NULL,NULL),(272,0,'GRES','Grease',NULL,NULL,NULL),(273,0,'GSKT','Gasket',NULL,NULL,NULL),(274,0,'GVNR','Governor',NULL,NULL,NULL),(275,0,'HOSE','Hose',NULL,NULL,NULL),(276,0,'HSYS','Hydraulic Control System',NULL,NULL,NULL),(277,0,'HUBC','Hub Coupling',NULL,NULL,NULL),(278,0,'ICLR','Intercooler',NULL,NULL,NULL),(279,0,'ICTR','Indicator (Press, Temp, Flow, Level)',0,0,''),(280,0,'IGNT','Ignitor',NULL,NULL,NULL),(281,0,'IJCT','Injector Assembly',NULL,NULL,NULL),(282,0,'INCT','Indicator',NULL,NULL,NULL),(283,0,'INJC','Injection pump',NULL,NULL,NULL),(284,0,'INSR','Insulator',NULL,NULL,NULL),(285,0,'ISYS','Instrument System',NULL,NULL,NULL),(286,0,'JOIN','Flexible Joint',NULL,NULL,NULL),(287,0,'LAMP','Lamp',NULL,NULL,NULL),(288,0,'LNER','Liner',NULL,NULL,NULL),(289,0,'LNKG','Linkage',NULL,NULL,NULL),(290,0,'LPMP','Oil Pump',NULL,NULL,NULL),(291,0,'LTAN','Lube TAN',NULL,NULL,NULL),(297,0,'LTBN','Lube TBN',NULL,NULL,NULL),(298,0,'LUBE','Lube Oil',NULL,NULL,NULL),(299,0,'LUBR','Lubricator',NULL,NULL,NULL),(300,0,'MBRG','Metal Bearing',NULL,NULL,NULL),(301,0,'MOST','Motor for Starting',NULL,NULL,NULL),(302,0,'MOTR','Motor',NULL,NULL,NULL),(303,0,'MOUN','Engine Mounting',NULL,NULL,NULL),(304,0,'MUFL','Muffler',NULL,NULL,NULL),(305,0,'NOZL','Nozzle',NULL,NULL,NULL),(306,0,'NUTT','Nut',NULL,NULL,NULL),(307,0,'OCRY','Over Current Relay',NULL,NULL,NULL),(308,0,'OFLT','Oil Filter',NULL,NULL,NULL),(309,0,'OHRY','Overheat Protector Relay',NULL,NULL,NULL),(310,0,'OLRY','Overload Relay',NULL,NULL,NULL),(311,0,'OPRS','Oil Pressure',NULL,NULL,NULL),(312,0,'ORNG','O-Ring',NULL,NULL,NULL),(313,0,'OSEL','Oil Seal',NULL,NULL,NULL),(314,0,'OSTA','Over Speed Trip Bolt Assembly',NULL,NULL,NULL),(315,0,'OTHR','Other (specify in long text)',NULL,NULL,NULL),(316,0,'PDEV','Protective Devices',NULL,NULL,NULL),(317,0,'PIND','Press Indicator',NULL,NULL,NULL),(318,0,'PINN','Pin',NULL,NULL,NULL),(319,0,'PIPE','Pipe',NULL,NULL,NULL),(320,0,'PLEY','Pulley',NULL,NULL,NULL),(321,0,'PLNG','Plunger',NULL,NULL,NULL),(322,0,'PLUG','Plug',NULL,NULL,NULL),(323,0,'PRET','Plate Bearing Retainer',NULL,NULL,NULL),(324,0,'PRNG','Piston Ring',NULL,NULL,NULL),(325,0,'PSTN','Piston',NULL,NULL,NULL),(326,0,'PSYS','Pneumatic Control System',NULL,NULL,NULL),(327,0,'RADT','Radiator',NULL,NULL,NULL),(328,0,'REGT','Regulator',NULL,NULL,NULL),(329,0,'RFLT','Reflector',NULL,NULL,NULL),(330,0,'RING','Ring',NULL,NULL,NULL),(331,0,'RJUN','Ring Junk',NULL,NULL,NULL),(332,0,'RLAY','Relay',NULL,NULL,NULL),(333,0,'RLNR','Ring Liner',NULL,NULL,NULL),(334,0,'RODD','Rod',NULL,NULL,NULL),(335,0,'RPST','Rod. Piston',NULL,NULL,NULL),(336,0,'SEAL','Seal',NULL,NULL,NULL),(337,0,'SEAT','Seat',NULL,NULL,NULL),(338,0,'SETT','Setting Device',NULL,NULL,NULL),(339,0,'SFRM','Stator Frame',NULL,NULL,NULL),(340,0,'SFVV','Valve, Safety',0,NULL,NULL),(341,0,'SHFT','Shaft',NULL,NULL,NULL),(342,0,'SHIM','Shim',NULL,NULL,NULL),(343,0,'SHVE','Sheave',NULL,NULL,NULL),(344,0,'SLNT','Spacer Lantern',NULL,NULL,NULL),(345,0,'SLVE','Sleeve',NULL,NULL,NULL),(346,0,'SNSR','Sensor for Speed and Timing',NULL,NULL,NULL),(347,0,'SOIL','Screen Oil',NULL,NULL,NULL),(348,0,'SPCR','Spacer',NULL,NULL,NULL),(349,0,'SPIN','Shear Pin',NULL,NULL,NULL),(350,0,'SPLG','Spark Plugs',NULL,NULL,NULL),(351,0,'SPRG','Spring',NULL,NULL,NULL),(352,0,'SSNR','Speed Sensor',NULL,NULL,NULL),(353,0,'STRN','Strainers',NULL,NULL,NULL),(354,0,'STRT','Starter',NULL,NULL,NULL),(355,0,'SUCT','Inlet / Suction Air Line',NULL,NULL,NULL),(356,0,'SUVV','Valve Suction',NULL,NULL,NULL),(357,0,'SWIC','Switch',NULL,NULL,NULL),(358,0,'TBRG','Thrust Bearing',NULL,NULL,NULL),(359,0,'TCPL','Thermocouple',NULL,NULL,NULL),(360,0,'TSNR','Timing Sensor',NULL,NULL,NULL),(361,0,'TURB','Turbocharger',NULL,NULL,NULL),(362,0,'VBLR','Valve Bridge & Lash, Rotators',0,NULL,NULL),(363,0,'VBLT','Vee Type Belt',NULL,NULL,NULL),(364,0,'VDMP','Vibration Damper',NULL,NULL,NULL),(365,0,'VENT','Venting / Vent Line',NULL,NULL,NULL),(366,0,'VLVE','Valve',NULL,NULL,NULL),(367,0,'VSEL','Pressure Vessel (Drum, Scrubber, Column)',0,0,NULL),(368,0,'WASH','Washer',NULL,NULL,NULL),(369,0,'WHEL','Wheel',NULL,NULL,NULL),(370,0,'WIPE','Packing Wiper',NULL,NULL,NULL),(371,0,'WIRE','Wiring',NULL,NULL,NULL),(372,0,'WJAK','Jacket water cooler',NULL,NULL,NULL),(373,0,'WPMP','Water Pumps',NULL,NULL,NULL),(374,0,'WROT','Washer Rotation Mech. Seal',NULL,NULL,NULL),(375,0,'WTRG','Water Temperature Regulators',NULL,NULL,NULL),(376,0,'WXXR','Wearing Ring',NULL,NULL,NULL),(377,0,'XFAN','Fan Exchanger',NULL,NULL,NULL),(378,0,'XHOS','Exhaust Piping',NULL,NULL,NULL),(379,0,'XPRN','Nut Piston Rod Crosshead Pin',NULL,NULL,NULL),(380,0,'XSYS','Exhaust System',NULL,NULL,NULL),(381,0,'XTER','Exciter',NULL,NULL,NULL),(382,0,'ARMR','Armature',NULL,NULL,NULL),(383,0,'BKER','Circuit Breaker / Contractor',NULL,NULL,NULL),(384,0,'BLWR','Blower',NULL,NULL,NULL),(385,0,'BNUT','Bolt & Nut Set',NULL,NULL,NULL),(386,0,'BOLT','Bolt',NULL,NULL,NULL),(387,0,'BREK','Breaker',NULL,NULL,NULL),(388,0,'BRNG','Bearing',NULL,NULL,NULL),(389,0,'BRUS','Brushes',NULL,NULL,NULL),(390,0,'BUSH','Bushing',NULL,NULL,NULL),(391,0,'CABL','Cable',NULL,NULL,NULL),(392,0,'CIRC','Main Circuit',NULL,NULL,NULL),(393,0,'COIL','Winding Coil',NULL,NULL,NULL),(394,0,'CONT','Contactor',NULL,NULL,NULL),(395,0,'DIOD','Diode',NULL,NULL,NULL),(396,0,'DOWL','Dowel Pin',NULL,NULL,NULL),(397,0,'ESYS','Electrical Control System',NULL,NULL,NULL),(398,0,'FANN','Fan Blade',NULL,NULL,NULL),(399,0,'FCVR','Fan Cover',NULL,NULL,NULL),(400,0,'FRAM','Frame',NULL,NULL,NULL),(401,0,'FUSE','Fuse',NULL,NULL,NULL),(402,0,'INCT','Indicator',NULL,NULL,NULL),(403,0,'INSL','Insulation',NULL,NULL,NULL),(404,0,'INSR','Insulator',NULL,NULL,NULL),(405,0,'ISYS','Instrument System',NULL,NULL,NULL),(406,0,'LAMP','Lamp',NULL,NULL,NULL),(407,0,'NUTT','Nut',NULL,NULL,NULL),(408,0,'OCRY','Over Current Relay',NULL,NULL,NULL),(409,0,'OHRY','Overheat Protector Relay',NULL,NULL,NULL),(410,0,'OLRY','Overload Relay',NULL,NULL,NULL),(411,0,'OTHR','Other (specify in long text)',NULL,NULL,NULL),(412,0,'REGT','Regulator',NULL,NULL,NULL),(413,0,'RING','Ring',NULL,NULL,NULL),(414,0,'RLAY','Relay',NULL,NULL,NULL),(415,0,'SETT','Setting Device',NULL,NULL,NULL),(416,0,'SFRM','Stator Frame',NULL,NULL,NULL),(417,0,'SGER','Switchgear',NULL,NULL,NULL),(418,0,'SNSR','Sensor',NULL,NULL,NULL),(419,0,'TRAF','Transformer',NULL,NULL,NULL),(420,0,'WIRE','Wiring',NULL,NULL,NULL),(421,0,'XDCR','Tranducer',NULL,NULL,NULL),(422,0,'XTER','Exciter',NULL,NULL,NULL),(423,0,'BNUT','Bolt & Nut Set',NULL,NULL,NULL),(424,0,'BOLT','Bolt',NULL,NULL,NULL),(425,0,'CHVV','Check Valve',NULL,NULL,NULL),(426,0,'CNVV','Control Valve (Press, Temp, Flow, Level)',0,0,''),(427,0,'CTRL','Controller (Press, Temp, Flow, Level)',0,0,''),(428,0,'FFAN','FinFan',NULL,NULL,NULL),(429,0,'NUTT','Nut',NULL,NULL,NULL),(430,0,'OTHR','Other (specify in long text)',NULL,NULL,NULL),(431,0,'PIND','Pressure Indicator',NULL,NULL,NULL),(432,0,'RECR','Recorder (Press, Temp, Flow, Level)',0,0,''),(433,0,'REGT','Regulator',NULL,NULL,NULL),(434,0,'SFVV','Valve, Safety',0,NULL,NULL),(435,0,'SWIC','Switch',NULL,NULL,NULL),(436,0,'TANK','Tank',NULL,NULL,NULL),(437,0,'TCPL','Thermocouple',NULL,NULL,NULL),(438,0,'XTMR','Transmitter (Press, Temp, Flow, Level)',0,0,''),(439,0,'ACTR','Actuator',NULL,NULL,NULL),(440,0,'AFLT','Air filter',NULL,NULL,NULL),(441,0,'ALTR','Alternator',NULL,NULL,NULL),(442,0,'AXLE','Axle',NULL,NULL,NULL),(443,0,'BNUT','Bolt & Nut Set',NULL,NULL,NULL),(444,0,'BOLT','Bolt',NULL,NULL,NULL),(445,0,'BRAK','Brake',NULL,NULL,NULL),(446,0,'BRNG','Bearing',NULL,NULL,NULL),(447,0,'BRSP','Bearing Spacer',NULL,NULL,NULL),(448,0,'BTRY','Battery',NULL,NULL,NULL),(449,0,'BUSH','Bushing',NULL,NULL,NULL),(450,0,'CLUC','Clutch',NULL,NULL,NULL),(451,0,'COBO','Connecting Rod Bolt',NULL,NULL,NULL),(452,0,'COPI','Crank Pin Bearing',NULL,NULL,NULL),(453,0,'COVR','Cover',NULL,NULL,NULL),(454,0,'CPIN','Cotter Pin',NULL,NULL,NULL),(455,0,'CPLG','Coupling',NULL,NULL,NULL),(456,0,'CRBE','Crankshaft Bearing',NULL,NULL,NULL),(457,0,'CROD','Connecting Rod',NULL,NULL,NULL),(458,0,'CROI','Crankshaft Oil Seal',NULL,NULL,NULL),(459,0,'CSHF','CrankShaft',NULL,NULL,NULL),(460,0,'CUTT','Cutting Edge',NULL,NULL,NULL),(461,0,'CYHD','Cylinder Head',NULL,NULL,NULL),(462,0,'CYLR','Cylinder',NULL,NULL,NULL),(463,0,'DISC','Disc',NULL,NULL,NULL),(464,0,'DOWL','Dowel Pin',NULL,NULL,NULL),(465,0,'ELMT','Element',NULL,NULL,NULL),(466,0,'EPNL','Engine panel',NULL,NULL,NULL),(467,0,'ESYS','Electrical Control System',NULL,NULL,NULL),(468,0,'FANN','Fan Blade',NULL,NULL,NULL),(469,0,'FLFT','Fuel Filter',NULL,NULL,NULL),(470,0,'FLTR','Lube / Seal Oil Filter',NULL,NULL,NULL),(471,0,'FPRS','Fuel pressure',NULL,NULL,NULL),(472,0,'FRAM','Frame',NULL,NULL,NULL),(473,0,'FREG','Fuel regulator',NULL,NULL,NULL),(474,0,'FUSE','Fuse',NULL,NULL,NULL),(475,0,'FWHL','Flywheel',NULL,NULL,NULL),(476,0,'GAUG','Gauge',NULL,NULL,NULL),(477,0,'GBOX','Gearbox',NULL,NULL,NULL),(478,0,'GEAR','Gear',NULL,NULL,NULL),(479,0,'GRES','Grease',NULL,NULL,NULL),(480,0,'GSKT','Gasket',NULL,NULL,NULL),(481,0,'HBRG','Housing Bearing',NULL,NULL,NULL),(482,0,'HOSE','Hose',NULL,NULL,NULL),(483,0,'HSYS','Hydraulic Control System',NULL,NULL,NULL),(484,0,'HUBC','Hub Coupling',NULL,NULL,NULL),(485,0,'HYDR','Hydromaster',NULL,NULL,NULL),(486,0,'ICTR','Indicator (Press, Temp, Flow, Level)',0,0,''),(487,0,'IJCT','Injector Assembly',NULL,NULL,NULL),(488,0,'INJC','Injection pump',NULL,NULL,NULL),(489,0,'ISYS','Instrument System',NULL,NULL,NULL),(490,0,'JOIN','Flexible Joint',NULL,NULL,NULL),(491,0,'LAMP','Lamp',NULL,NULL,NULL),(492,0,'LNER','Liner',NULL,NULL,NULL),(493,0,'LNKG','Linkage',NULL,NULL,NULL),(494,0,'LPMP','Oil Pump / Lube Pump',NULL,NULL,NULL),(495,0,'LUBE','Lube Oil',NULL,NULL,NULL),(496,0,'MBRG','Metal Bearing',NULL,NULL,NULL),(497,0,'MOST','Motor for Starting',NULL,NULL,NULL),(498,0,'MUFL','Muffler',NULL,NULL,NULL),(499,0,'NOZL','Nozzle',NULL,NULL,NULL),(500,0,'NUTT','Nut',NULL,NULL,NULL),(501,0,'OFLT','Oil Filter',NULL,NULL,NULL),(502,0,'ORNG','O-Ring',NULL,NULL,NULL),(503,0,'OSEL','Oil Seal',NULL,NULL,NULL),(504,0,'OTHR','Other (specify in long text)',NULL,NULL,NULL),(505,0,'PDEV','Protective Devices / Safety Devices',NULL,NULL,NULL),(506,0,'PINN','Pin',NULL,NULL,NULL),(507,0,'PLEY','Pulley',NULL,NULL,NULL),(508,0,'PRNG','Piston Ring',NULL,NULL,NULL),(509,0,'PRSF','Propeller Shaft',NULL,NULL,NULL),(510,0,'PSTN','Piston',NULL,NULL,NULL),(511,0,'PTOC','Power Take Off Coupling',NULL,NULL,NULL),(512,0,'RADT','Radiator',NULL,NULL,NULL),(513,0,'REGT','Regulator',NULL,NULL,NULL),(514,0,'RING','Ring',NULL,NULL,NULL),(515,0,'RLAY','Relay',NULL,NULL,NULL),(516,0,'RVLV','Release Valve',NULL,NULL,NULL),(517,0,'SEAL','Seal',NULL,NULL,NULL),(518,0,'SHFT','Shaft',NULL,NULL,NULL),(519,0,'SPLG','Spark Plugs',NULL,NULL,NULL),(520,0,'SPRC','Sprocket',NULL,NULL,NULL),(521,0,'SPRG','Spring',NULL,NULL,NULL),(522,0,'STRN','Strainers',NULL,NULL,NULL),(523,0,'STRR','Steering',NULL,NULL,NULL),(524,0,'STRT','Starter',NULL,NULL,NULL),(525,0,'TRSF','Transfer',NULL,NULL,NULL),(526,0,'TRSM','Transmission',NULL,NULL,NULL),(527,0,'TUBE','Tubing',NULL,NULL,NULL),(528,0,'TURB','Turbocharger',NULL,NULL,NULL),(529,0,'VBLT','Vee Type Belt',NULL,NULL,NULL),(530,0,'VLVE','Valve',NULL,NULL,NULL),(531,0,'WASH','Washer',NULL,NULL,NULL),(532,0,'WHCX','Wheel (Chain type)',NULL,NULL,NULL),(533,0,'WHEL','Wheel',NULL,NULL,NULL),(534,0,'WHRX','Wheel ( Rubber Tyre type)',NULL,NULL,NULL),(535,0,'WIRE','Wiring',NULL,NULL,NULL),(536,0,'WPMP','Water Pumps',NULL,NULL,NULL),(537,0,'XHOS','Exhaust',NULL,NULL,NULL),(538,0,'XSHO','Shoe Crosshead',NULL,NULL,NULL),(539,0,'XTER','Exciter',NULL,NULL,NULL),(540,0,'BNUT','Bolt & Nut Set',NULL,NULL,NULL),(541,0,'BOLT','Bolt',NULL,NULL,NULL),(542,0,'BRNG','Bearing',NULL,NULL,NULL),(543,0,'CHVV','Check Valve',NULL,NULL,NULL),(544,0,'CNVV','Control Valve (Press, Temp, Flow, Level)',0,0,''),(545,0,'CONT','Contactor',NULL,NULL,NULL),(546,0,'CTRL','Controller (Press, Temp, Flow, Level)',0,0,''),(547,0,'HHSE','Hydraulic Hose',NULL,NULL,NULL),(548,0,'HOIL','Hydraulic Oil',NULL,NULL,NULL),(549,0,'HOSE','Hose',NULL,NULL,NULL),(550,0,'HPMP','Hydraulic Oil Pump',NULL,NULL,NULL),(551,0,'ICTR','Indicator (Press, Temp, Flow, Level)',0,0,''),(552,0,'NUTT','Nut',NULL,NULL,NULL),(553,0,'ORNG','O-Ring',NULL,NULL,NULL),(554,0,'OSEL','Oil Seal',NULL,NULL,NULL),(555,0,'OTHR','Other (specify in long text)',NULL,NULL,NULL),(556,0,'PCKG','Packing / Gland Packing',NULL,NULL,NULL),(557,0,'PIND','Pressure Indicator',NULL,NULL,NULL),(558,0,'PLNG','Plunger',NULL,NULL,NULL),(559,0,'PVLV','Pump Valve',NULL,NULL,NULL),(560,0,'RECR','Recorder (Press, Temp, Flow, Level)',0,0,''),(561,0,'REGT','Regulator',NULL,NULL,NULL),(562,0,'RVLV','Relief Valve',NULL,NULL,NULL),(563,0,'SEAL','Seal',NULL,NULL,NULL),(564,0,'SFVV','Valve, Safety',0,NULL,NULL),(565,0,'SUVV','Valve Suction',NULL,NULL,NULL),(566,0,'TANK','Tank',NULL,NULL,NULL),(567,0,'VLVE','Valve',NULL,NULL,NULL),(568,0,'ACTR','Actuator',NULL,NULL,NULL),(569,0,'BKER','Circuit Breaker / Contractor',NULL,NULL,NULL),(570,0,'BNUT','Bolt & Nut Set',NULL,NULL,NULL),(571,0,'BOLT','Bolt',NULL,NULL,NULL),(572,0,'CABL','Cable',NULL,NULL,NULL),(573,0,'CDVC','Control Device',NULL,NULL,NULL),(574,0,'CNVV','Control Valve (Press, Temp, Flow, Level)',0,0,''),(575,0,'CONT','Contactor',NULL,NULL,NULL),(576,0,'CTRL','Controller (Press, Temp, Flow, Level)',0,0,''),(577,0,'DIOD','Diode',NULL,NULL,NULL),(578,0,'FUSE','Fuse',NULL,NULL,NULL),(579,0,'GAUG','Gauge',NULL,NULL,NULL),(580,0,'GSKT','Gasket',NULL,NULL,NULL),(581,0,'HETR','Heater',NULL,NULL,NULL),(582,0,'HOSE','Hose',NULL,NULL,NULL),(583,0,'INCT','Indicator',NULL,NULL,NULL),(584,0,'INSL','Insulation',NULL,NULL,NULL),(585,0,'INSR','Insulator',NULL,NULL,NULL),(586,0,'NUTT','Nut',NULL,NULL,NULL),(587,0,'OCRY','Over Current Relay',NULL,NULL,NULL),(588,0,'OHRY','Overheat Protector Relay',NULL,NULL,NULL),(589,0,'OLRY','Overload Relay',NULL,NULL,NULL),(590,0,'OSTA','Over Speed Trip Bolt Assembly',NULL,NULL,NULL),(591,0,'OTHR','Other (specify in long text)',NULL,NULL,NULL),(592,0,'PIND','Pressure Indicator',NULL,NULL,NULL),(593,0,'PRSW','Pressure Switch',NULL,NULL,NULL),(594,0,'RECR','Recorder (Press, Temp, Flow, Level)',0,0,''),(595,0,'REGT','Regulator',NULL,NULL,NULL),(596,0,'RLAY','Relay',NULL,NULL,NULL),(597,0,'SEAL','Seal',NULL,NULL,NULL),(598,0,'SEAT','Seat',NULL,NULL,NULL),(599,0,'SFVV','Valve, Safety',0,NULL,NULL),(600,0,'SNSR','Sensor',NULL,NULL,NULL),(601,0,'SWIC','Switch',NULL,NULL,NULL),(602,0,'TCPL','Thermocouple',NULL,NULL,NULL),(603,0,'TUBE','Tubing',NULL,NULL,NULL),(604,0,'WIRE','Wiring',NULL,NULL,NULL),(605,0,'XDCR','Tranducer',NULL,NULL,NULL),(606,0,'XFMR','Transformer',NULL,NULL,NULL),(607,0,'XTMR','Transmitter (Press, Temp, Flow, Level)',0,0,''),(608,0,'ACTR','Actuator',NULL,NULL,NULL),(609,0,'ADTR','Adaptor',NULL,NULL,NULL),(610,0,'AFLT','Air filter',NULL,NULL,NULL),(611,0,'ALTR','Alternator',NULL,NULL,NULL),(612,0,'BATT','Battery',NULL,NULL,NULL),(613,0,'BKER','Circuit Breaker / Contractor',NULL,NULL,NULL),(614,0,'BNUT','Bolt & Nut Set',NULL,NULL,NULL),(615,0,'BOLT','Bolt',NULL,NULL,NULL),(616,0,'BRAK','Brake',NULL,NULL,NULL),(617,0,'BRNG','Bearing',NULL,NULL,NULL),(618,0,'BRTH','Crankcase Breather',NULL,NULL,NULL),(619,0,'BUSH','Bushing',NULL,NULL,NULL),(620,0,'CBLT','Cog Type Belt',NULL,NULL,NULL),(621,0,'CHVV','Check Valve',NULL,NULL,NULL),(622,0,'CLNT','Water/SCA Type Coolant',NULL,NULL,NULL),(623,0,'CLUC','Clutch',NULL,NULL,NULL),(624,0,'COBO','Connecting Rod Bolt',NULL,NULL,NULL),(625,0,'CONT','Contactor',NULL,NULL,NULL),(626,0,'COPI','Crank Pin Bearing',NULL,NULL,NULL),(627,0,'CPIN','Cotter Pin',NULL,NULL,NULL),(628,0,'CPLG','Coupling',NULL,NULL,NULL),(629,0,'CRBE','Crankshaft Bearing',NULL,NULL,NULL),(630,0,'CROD','Connecting Rod',NULL,NULL,NULL),(631,0,'CROI','Crankshaft Oil Seal',NULL,NULL,NULL),(632,0,'CSHF','CrankShaft',NULL,NULL,NULL),(633,0,'CYHD','Cylinder Head',NULL,NULL,NULL),(634,0,'CYLR','Cylinder',NULL,NULL,NULL),(635,0,'DISC','Disc',NULL,NULL,NULL),(636,0,'DOWL','Dowel Pin',NULL,NULL,NULL),(637,0,'ELMT','Element',NULL,NULL,NULL),(638,0,'EPNL','Engine panel',NULL,NULL,NULL),(639,0,'ESYS','Electrical Control System',NULL,NULL,NULL),(640,0,'FANN','Fan Blade',NULL,NULL,NULL),(641,0,'FLTR','Lube / Seal Oil Filter',NULL,NULL,NULL),(642,0,'FPRS','Fuel pressure',NULL,NULL,NULL),(643,0,'FRAM','Frame',NULL,NULL,NULL),(644,0,'FREG','Fuel regulator',NULL,NULL,NULL),(645,0,'FUSE','Fuse',NULL,NULL,NULL),(646,0,'FWHL','Flywheel',NULL,NULL,NULL),(647,0,'GAUG','Gauge',NULL,NULL,NULL),(648,0,'GEAR','Gear',NULL,NULL,NULL),(649,0,'GENR','Generator',NULL,NULL,NULL),(650,0,'GRES','Grease',NULL,NULL,NULL),(651,0,'GSKT','Gasket',NULL,NULL,NULL),(652,0,'HOSE','Hose',NULL,NULL,NULL),(653,0,'HSYS','Hydraulic Control System',NULL,NULL,NULL),(654,0,'ICLR','Intercooler',NULL,NULL,NULL),(655,0,'ICSG','Inner casing',NULL,NULL,NULL),(656,0,'ICTR','Indicator (Press, Temp, Flow, Level)',0,0,''),(657,0,'IJCT','Injector Assembly',NULL,NULL,NULL),(658,0,'INCT','Indicator',NULL,NULL,NULL),(659,0,'INJC','Injection pump',NULL,NULL,NULL),(660,0,'INSL','Insulation',NULL,NULL,NULL),(661,0,'INSR','Insulator',NULL,NULL,NULL),(662,0,'ISYS','Instrument System',NULL,NULL,NULL),(663,0,'JOIN','Flexible Joint',NULL,NULL,NULL),(664,0,'KEYY','Key',NULL,NULL,NULL),(665,0,'LAMP','Lamp',NULL,NULL,NULL),(666,0,'LCVR','Lock Cover Cyl. Head',NULL,NULL,NULL),(667,0,'LNER','Liner',NULL,NULL,NULL),(668,0,'LNKG','Linkage',NULL,NULL,NULL),(669,0,'LOCK','Pin Lock Crosshead Extension',NULL,NULL,NULL),(670,0,'LPLT','Lock Cover Valve',NULL,NULL,NULL),(671,0,'LPMP','Oil Pump / Lube Pump',NULL,NULL,NULL),(672,0,'LSHF','Lineshaft',NULL,NULL,NULL),(673,0,'LUBE','Lube Oil',NULL,NULL,NULL),(674,0,'MBRG','Metal Bearing',NULL,NULL,NULL),(675,0,'MOST','Motor for Starting',NULL,NULL,NULL),(676,0,'MUFL','Muffler',NULL,NULL,NULL),(677,0,'NOZL','Nozzle',NULL,NULL,NULL),(678,0,'NUTT','Nut',NULL,NULL,NULL),(679,0,'OFLT','Oil Filter',NULL,NULL,NULL),(680,0,'OLRY','Overload Relay',NULL,NULL,NULL),(681,0,'OPRS','Oil Pressure',NULL,NULL,NULL),(682,0,'ORNG','O-Ring',NULL,NULL,NULL),(683,0,'OSEL','Oil Seal',NULL,NULL,NULL),(684,0,'OSLV','O-Ring-Sleeve',NULL,NULL,NULL),(685,0,'OTHR','Other (specify in long text)',NULL,NULL,NULL),(686,0,'PINN','Pin',NULL,NULL,NULL),(687,0,'PLEY','Pulley',NULL,NULL,NULL),(688,0,'PLUG','Plug',NULL,NULL,NULL),(689,0,'PRNG','Piston Ring',NULL,NULL,NULL),(690,0,'PSTN','Piston',NULL,NULL,NULL),(691,0,'RADT','Radiator',NULL,NULL,NULL),(692,0,'RBRG','Radial Bearing',NULL,NULL,NULL),(693,0,'RCOL','Ring Valve Cover',NULL,NULL,NULL),(694,0,'RODD','Rod',NULL,NULL,NULL),(695,0,'RPST','Rod. Piston',NULL,NULL,NULL),(696,0,'SEAL','Seal',NULL,NULL,NULL),(697,0,'SETT','Setting Device',NULL,NULL,NULL),(698,0,'SFRM','Stator Frame',NULL,NULL,NULL),(699,0,'SFVV','Valve, Safety',0,NULL,NULL),(700,0,'SHFT','Shaft',NULL,NULL,NULL),(701,0,'SHIM','Shim',NULL,NULL,NULL),(702,0,'SLVE','Sleeve',NULL,NULL,NULL),(703,0,'SPLG','Spark Plugs',NULL,NULL,NULL),(704,0,'SPLY','Sheave Pulley',NULL,NULL,NULL),(705,0,'SPRG','Spring',NULL,NULL,NULL),(706,0,'SRNG','Shaft Seal Ring',NULL,NULL,NULL),(707,0,'SSEL','Seal Oil Jack Shaft',NULL,NULL,NULL),(708,0,'SSLV','Spacer Sleeve',NULL,NULL,NULL),(709,0,'SSNR','Speed Sensor',NULL,NULL,NULL),(710,0,'STRN','Strainers',NULL,NULL,NULL),(711,0,'STRT','Starter',NULL,NULL,NULL),(712,0,'SWIC','Switch',NULL,NULL,NULL),(713,0,'TANK','Tank',NULL,NULL,NULL),(714,0,'TCPL','Thermocouple',NULL,NULL,NULL),(715,0,'TURB','Turbocharger',NULL,NULL,NULL),(716,0,'VBLT','Vee Type Belt',NULL,NULL,NULL),(717,0,'VDMP','Vibration Damper',NULL,NULL,NULL),(718,0,'VENT','Venting / Vent Line',NULL,NULL,NULL),(719,0,'VLVE','Valve',NULL,NULL,NULL),(720,0,'WASH','Washer',NULL,NULL,NULL),(721,0,'WHCX','Wheel (Chain type)',NULL,NULL,NULL),(722,0,'WHEL','Wheel',NULL,NULL,NULL),(723,0,'WHRX','Wheel ( Rubber Tyre type)',NULL,NULL,NULL),(724,0,'WHSX','Wheel (Steel Drum Type)',NULL,NULL,NULL),(725,0,'WIRE','Wiring',NULL,NULL,NULL),(726,0,'WPMP','Water Pumps',NULL,NULL,NULL),(727,0,'WTRG','Water Temperature Regulators',NULL,NULL,NULL),(728,0,'XHOS','Exhaust',NULL,NULL,NULL),(729,0,'XPRN','Nut Piston Rod Crosshead Pin',NULL,NULL,NULL),(730,0,'XTER','Exciter',NULL,NULL,NULL),(731,0,'AHSE','Air Hose',NULL,NULL,NULL),(732,0,'ASVV','Valve Assembly',NULL,NULL,NULL),(733,0,'BNUT','Bolt & Nut Set',NULL,NULL,NULL),(734,0,'BOLT','Bolt',NULL,NULL,NULL),(735,0,'BRNG','Bearing',NULL,NULL,NULL),(736,0,'CHVV','Check Valve',NULL,NULL,NULL),(737,0,'CLRC','Gap, Float, Clearance',0,0,NULL),(738,0,'CNVV','Control Valve (Press, Temp, Flow, Level)',0,0,''),(739,0,'CTRL','Controller (Press, Temp, Flow, Level)',0,0,''),(740,0,'GLAS','Glass Oiler',NULL,NULL,NULL),(741,0,'HOSE','Hose',NULL,NULL,NULL),(742,0,'ICTR','Indicator (Press, Temp, Flow, Level)',0,0,''),(743,0,'INCT','Indicator',NULL,NULL,NULL),(744,0,'NUTT','Nut',NULL,NULL,NULL),(745,0,'OTHR','Other (specify in long text)',NULL,NULL,NULL),(746,0,'PIND','Pressure Indicator',NULL,NULL,NULL),(747,0,'RECR','Recorder (Press, Temp, Flow, Level)',0,0,''),(748,0,'REGT','Regulator',NULL,NULL,NULL),(749,0,'RLAY','Relay',NULL,NULL,NULL),(750,0,'RVLV','Relief Valve',NULL,NULL,NULL),(751,0,'SFVV','Valve, Safety',0,NULL,NULL),(752,0,'TANK','Tank',NULL,NULL,NULL),(753,0,'VLVE','Valve',NULL,NULL,NULL),(754,0,'BCAP','Bubble Cap',NULL,NULL,NULL),(755,0,'BNUT','Bolt & Nut Set',NULL,NULL,NULL),(756,0,'BOLT','Bolt',NULL,NULL,NULL),(757,0,'BREK','Breaker',NULL,NULL,NULL),(758,0,'CAIN','Chain',NULL,NULL,NULL),(759,0,'CHVV','Check Valve',NULL,NULL,NULL),(760,0,'COAL','Coalescer',NULL,NULL,NULL),(761,0,'CYCL','Cyclone',NULL,NULL,NULL),(762,0,'DCMR','Down Comer Pipe',NULL,NULL,NULL),(763,0,'DCVV','Discharge Control Valve',NULL,NULL,NULL),(764,0,'DIST','Distributor Plate',NULL,NULL,NULL),(765,0,'DMST','Demister',NULL,NULL,NULL),(766,0,'DRAN','Drain Line and Block Valve',NULL,NULL,NULL),(767,0,'FCVV','Flow Control Valve',NULL,NULL,NULL),(768,0,'IDFL','Flow Indicator',NULL,NULL,NULL),(769,0,'IDLV','Level Indicator',NULL,NULL,NULL),(770,0,'IDPR','Pressure Indicator',NULL,NULL,NULL),(771,0,'IDTM','Temperature Indicator',NULL,NULL,NULL),(772,0,'LVGL','Level Glass',NULL,NULL,NULL),(773,0,'LVVV','Level Control Valve',NULL,NULL,NULL),(774,0,'OTHR','Other (specify in long text)',NULL,NULL,NULL),(775,0,'PCVV','Pressure Control Valve',NULL,NULL,NULL),(776,0,'SCVV','Suction Control Valve',NULL,NULL,NULL),(777,0,'SFVV','Safety Relief Valve',NULL,NULL,NULL),(778,0,'VENT','Vent Line and Block Valve',NULL,NULL,NULL),(779,0,'VLVE','Valve',NULL,NULL,NULL),(780,0,'VORX','Vortex Breaker',NULL,NULL,NULL),(781,0,'XRFL','Flow Controller',NULL,NULL,NULL),(782,0,'XRLV','Level Controller',NULL,NULL,NULL),(783,0,'XRPR','Pressure Controller',NULL,NULL,NULL),(784,0,'XRTM','Temperature Controller',NULL,NULL,NULL),(785,0,'XTFL','Flow Transmitter',NULL,NULL,NULL),(786,0,'XTLV','Level Transmitter',NULL,NULL,NULL),(787,0,'XTMR','Transmitter (Press, Temp, Flow, Level)',0,0,''),(788,0,'XTPR','Pressure Transmitter',NULL,NULL,NULL),(789,0,'XTTM','Temperature Transmitter',NULL,NULL,NULL),(790,0,'AOVV','Air Operated Valve',NULL,NULL,NULL),(791,0,'ASVV','Valve Assembly',NULL,NULL,NULL),(792,0,'BLLN','Balance Line',NULL,NULL,NULL),(793,0,'BNUT','Bolt & Nut Set',NULL,NULL,NULL),(794,0,'BOLT','Bolt',NULL,NULL,NULL),(795,0,'BRCB','Brake Cable',NULL,NULL,NULL),(796,0,'BREK','Breaker',NULL,NULL,NULL),(797,0,'BREQ','Bearing Equalizer Assy',NULL,NULL,NULL),(798,0,'BRHS','Bearing HS Pinion',NULL,NULL,NULL),(799,0,'BRNG','Bearing',NULL,NULL,NULL),(800,0,'BRSS','Bearing SS Pinion',NULL,NULL,NULL),(801,0,'BUSH','Bushing',NULL,NULL,NULL),(802,0,'CABL','Cable',NULL,NULL,NULL),(803,0,'CAGE','Cage',NULL,NULL,NULL),(804,0,'CAIN','Chain',NULL,NULL,NULL),(805,0,'COPI','Crank Pin Bearing',NULL,NULL,NULL),(806,0,'COVR','Cover',NULL,NULL,NULL),(807,0,'CPIN','Cotter Pin',NULL,NULL,NULL),(808,0,'CPLG','Coupling',NULL,NULL,NULL),(809,0,'DRBR','Drum Brake Assy',NULL,NULL,NULL),(810,0,'FLTR','Lube / Seal Oil Filter',NULL,NULL,NULL),(811,0,'FOOT','Foot Base',NULL,NULL,NULL),(812,0,'GBOX','Gearbox',NULL,NULL,NULL),(813,0,'GEAR','Gear',NULL,NULL,NULL),(814,0,'GMSL','Gland Mech. Seal',NULL,NULL,NULL),(815,0,'GRBX','Gear Box',NULL,NULL,NULL),(816,0,'GRES','Grease',NULL,NULL,NULL),(817,0,'HBRG','Housing Bearing',NULL,NULL,NULL),(818,0,'HOSE','Hose',NULL,NULL,NULL),(819,0,'HSGR','HS Gear SS Pinion',NULL,NULL,NULL),(820,0,'HSNG','Housing',NULL,NULL,NULL),(821,0,'HSPN','HS Pinion',NULL,NULL,NULL),(822,0,'HSYS','Hydraulic Control System',NULL,NULL,NULL),(823,0,'ICSG','Inner casing',NULL,NULL,NULL),(824,0,'ICTR','Indicator (Press, Temp, Flow, Level)',0,0,''),(825,0,'ISLT','Isolator',NULL,NULL,NULL),(826,0,'JACK','Jack Shaft',NULL,NULL,NULL),(827,0,'JBRG','Jack Shaft Bearing',NULL,NULL,NULL),(828,0,'KEYY','Key',NULL,NULL,NULL),(829,0,'LNKG','Linkage',NULL,NULL,NULL),(830,0,'LUBE','Lube Oil',NULL,NULL,NULL),(831,0,'NUTT','Nut',NULL,NULL,NULL),(832,0,'ORNG','O-Ring',NULL,NULL,NULL),(833,0,'OSEL','Oil Seal',NULL,NULL,NULL),(834,0,'OSLV','O-Ring-Sleeve',NULL,NULL,NULL),(835,0,'OSTA','Over Speed Trip Bolt Assembly',NULL,NULL,NULL),(836,0,'OTHR','Other (specify in long text)',NULL,NULL,NULL),(837,0,'PCKX','Packing Set Stuffing Box',NULL,NULL,NULL),(838,0,'PIPE','Pipe',NULL,NULL,NULL),(839,0,'PTBX','Pitman Box Assy',NULL,NULL,NULL),(840,0,'PTKT','Pitman Kit',NULL,NULL,NULL),(841,0,'SCVV','Suction Control Valve',NULL,NULL,NULL),(842,0,'SEAL','Seal',NULL,NULL,NULL),(843,0,'SEAT','Seat',NULL,NULL,NULL),(844,0,'SETT','Setting Device',NULL,NULL,NULL),(845,0,'SFVV','Valve, Safety',0,NULL,NULL),(846,0,'SHFT','Shaft',NULL,NULL,NULL),(847,0,'SHIM','Shim',NULL,NULL,NULL),(848,0,'SSGR','SS Gear',NULL,NULL,NULL),(849,0,'SSLV','Spacer Sleeve',NULL,NULL,NULL),(850,0,'VBEL','V - Belt',NULL,NULL,NULL),(851,0,'VENT','Venting / Vent Line',NULL,NULL,NULL),(852,0,'VSEL','Pressure Vessel (Drum, Scrubber, Column)',0,0,NULL),(853,0,'WHEL','Wheel',NULL,NULL,NULL),(854,0,'WIRE','Wiring',NULL,NULL,NULL),(855,0,'WRHR','Wire Hanger',NULL,NULL,NULL),(856,0,'WROT','Washer Rotation Mech. Seal',NULL,NULL,NULL),(857,0,'XBOX','Stuffing Box',NULL,NULL,NULL),(858,0,'XROD','Extension Rod',NULL,NULL,NULL),(859,0,'AFLT','Air filter',NULL,NULL,NULL),(860,0,'ALRM','Alarm',NULL,NULL,NULL),(861,0,'ASVV','Valve Assembly',NULL,NULL,NULL),(862,0,'BRNG','Bearing',NULL,NULL,NULL),(863,0,'CABL','Cable',NULL,NULL,NULL),(864,0,'CHVV','Check Valve',NULL,NULL,NULL),(865,0,'CNVV','Control Valve (Press, Temp, Flow, Level)',0,0,''),(866,0,'COBO','Connecting Rod Bolt',NULL,NULL,NULL),(867,0,'CPIN','Cotter Pin',NULL,NULL,NULL),(868,0,'CRBE','Crankshaft Bearing',NULL,NULL,NULL),(869,0,'CROD','Connecting Rod',NULL,NULL,NULL),(870,0,'CROI','Crankshaft Oil Seal',NULL,NULL,NULL),(871,0,'CSHF','CrankShaft',NULL,NULL,NULL),(872,0,'CTRL','Controller (Press, Temp, Flow, Level)',0,0,''),(873,0,'CYHD','Cylinder Head',NULL,NULL,NULL),(874,0,'CYLR','Cylinder',NULL,NULL,NULL),(875,0,'DCVV','Discharge Control Valve',NULL,NULL,NULL),(876,0,'DISC','Disc',NULL,NULL,NULL),(877,0,'DIVV','Valve Discharge',NULL,NULL,NULL),(878,0,'DSCH','Outlet / Discharge Line',NULL,NULL,NULL),(879,0,'ELMT','Element',NULL,NULL,NULL),(880,0,'ESYS','Electrical Control System',NULL,NULL,NULL),(881,0,'FFAN','FinFan',NULL,NULL,NULL),(882,0,'FLTR','Lube / Seal Oil Filter',NULL,NULL,NULL),(883,0,'GAUG','Gauge',NULL,NULL,NULL),(884,0,'GSKT','Gasket',NULL,NULL,NULL),(885,0,'HBRG','Housing Bearing',NULL,NULL,NULL),(886,0,'HSYS','Hydraulic Control System',NULL,NULL,NULL),(887,0,'ICTR','Indicator (Press, Temp, Flow, Level)',0,0,''),(888,0,'ISYS','Instrument System',NULL,NULL,NULL),(889,0,'LPMP','Oil Pump / Lube Pump',NULL,NULL,NULL),(890,0,'LUBE','Lube Oil',NULL,NULL,NULL),(891,0,'LUBR','Lubricator',NULL,NULL,NULL),(892,0,'MBRG','Metal Bearing',NULL,NULL,NULL),(893,0,'NUTT','Nut',NULL,NULL,NULL),(894,0,'OFLT','Oil Filter',NULL,NULL,NULL),(895,0,'OPRS','Oil Pressure',NULL,NULL,NULL),(896,0,'ORNG','O-Ring',NULL,NULL,NULL),(897,0,'OSEL','Oil Seal',NULL,NULL,NULL),(898,0,'OSLV','O-Ring-Sleeve',NULL,NULL,NULL),(899,0,'OSTA','Over Speed Trip Bolt Assembly',NULL,NULL,NULL),(900,0,'OTHR','Other (specify in long text)',NULL,NULL,NULL),(901,0,'REGT','Regulator',NULL,NULL,NULL),(902,0,'RFLT','Reflector',NULL,NULL,NULL),(903,0,'RING','Ring',NULL,NULL,NULL),(904,0,'RLAY','Relay',NULL,NULL,NULL),(905,0,'RSEL','Retainer Mech. Seal',NULL,NULL,NULL),(906,0,'RVLV','Relief Valve',NULL,NULL,NULL),(907,0,'SCVV','Suction Control Valve',NULL,NULL,NULL),(908,0,'SEAL','Seal',NULL,NULL,NULL),(909,0,'SNSR','Sensor',NULL,NULL,NULL),(910,0,'SOIL','Screen Oil',NULL,NULL,NULL),(911,0,'SPCR','Spacer',NULL,NULL,NULL),(912,0,'SPIN','Shear Pin',NULL,NULL,NULL),(913,0,'SPRG','Spring',NULL,NULL,NULL),(914,0,'STEM','Stem',NULL,NULL,NULL),(915,0,'STRN','Strainers',NULL,NULL,NULL),(916,0,'SUCT','Inlet / Suction Line',NULL,NULL,NULL),(917,0,'SUVV','Valve Suction',NULL,NULL,NULL),(918,0,'TCPL','Thermocouple',NULL,NULL,NULL),(919,0,'VENT','Venting / Vent Line',NULL,NULL,NULL),(920,0,'VLVE','Valve',NULL,NULL,NULL),(921,0,'VSEL','Pressure Vessel (Drum, Scrubber, Column)',0,0,NULL),(922,0,'XTMR','Transmitter (Press, Temp, Flow, Level)',0,0,''),(923,0,'AOVV','Air Operated Valve',NULL,NULL,NULL),(924,0,'ASVV','Valve Assembly',NULL,NULL,NULL),(925,0,'BELT','V - Belt',NULL,NULL,NULL),(926,0,'BNUT','Bolt & Nut Set',NULL,NULL,NULL),(927,0,'BOLT','Bolt',NULL,NULL,NULL),(928,0,'BRCL','Bearing Clamp',NULL,NULL,NULL),(929,0,'BREK','Breaker',NULL,NULL,NULL),(930,0,'BRNG','Bearing',NULL,NULL,NULL),(931,0,'BUSH','Bushing',NULL,NULL,NULL),(932,0,'BWER','Balance Wear',NULL,NULL,NULL),(933,0,'BXXR','Backing Ring',NULL,NULL,NULL),(934,0,'CAIN','Chain',NULL,NULL,NULL),(935,0,'CAWR','Case Wearing',NULL,NULL,NULL),(936,0,'CHVV','Check Valve',NULL,NULL,NULL),(937,0,'CNVV','Control Valve (Press, Temp, Flow, Level)',0,0,''),(938,0,'COBE','Cover Bearing',NULL,NULL,NULL),(939,0,'COBO','Connecting Rod Bolt',NULL,NULL,NULL),(940,0,'COVA','Cover Valve',NULL,NULL,NULL),(941,0,'COVR','Cover',NULL,NULL,NULL),(942,0,'CPIN','Cotter Pin',NULL,NULL,NULL),(943,0,'CPLG','Coupling',NULL,NULL,NULL),(944,0,'CRBE','Crankshaft Bearing',NULL,NULL,NULL),(945,0,'CROD','Connecting Rod',NULL,NULL,NULL),(946,0,'CROI','Crankshaft Oil Seal',NULL,NULL,NULL),(947,0,'CSHF','CrankShaft',NULL,NULL,NULL),(948,0,'CSNG','Casing',NULL,NULL,NULL),(949,0,'CTRL','Controller (Press, Temp, Flow, Level)',0,0,''),(950,0,'CYHD','Cylinder Head',NULL,NULL,NULL),(951,0,'CYLR','Cylinder',NULL,NULL,NULL),(952,0,'DCVV','Discharge Control Valve',NULL,NULL,NULL),(953,0,'DISC','Disc',NULL,NULL,NULL),(954,0,'DIVV','Valve Discharge',NULL,NULL,NULL),(955,0,'FLTR','Lube / Seal Oil Filter',NULL,NULL,NULL),(956,0,'FOOT','Foot Base',NULL,NULL,NULL),(957,0,'FWHL','Flywheel',NULL,NULL,NULL),(958,0,'GAUG','Gauge',NULL,NULL,NULL),(959,0,'GBOX','Gearbox',NULL,NULL,NULL),(960,0,'GEAR','Gear',NULL,NULL,NULL),(961,0,'GMSL','Gland Mech. Seal',NULL,NULL,NULL),(962,0,'GRES','Grease',NULL,NULL,NULL),(963,0,'GSKT','Gasket',NULL,NULL,NULL),(964,0,'HSNG','Housing',NULL,NULL,NULL),(965,0,'HSYS','Hydraulic Control System',NULL,NULL,NULL),(966,0,'HUBC','Hub Coupling',NULL,NULL,NULL),(967,0,'ICLR','Intercooler',NULL,NULL,NULL),(968,0,'ICSG','Inner casing',NULL,NULL,NULL),(969,0,'ICTR','Indicator (Press, Temp, Flow, Level)',0,0,''),(970,0,'JACK','Jack Shaft',NULL,NULL,NULL),(971,0,'JBRG','Jack Shaft Bearing',NULL,NULL,NULL),(972,0,'KEYY','Key',NULL,NULL,NULL),(973,0,'LBRY','Labirynth',NULL,NULL,NULL),(974,0,'LNER','Liner',NULL,NULL,NULL),(975,0,'LPMP','Oil Pump / Lube Pump',NULL,NULL,NULL),(976,0,'LUBE','Lube Oil',NULL,NULL,NULL),(977,0,'LUBR','Lubricator',NULL,NULL,NULL),(978,0,'NUTC','Nut-Column',NULL,NULL,NULL),(979,0,'NUTT','Nut',NULL,1,NULL),(980,0,'OFLT','Oil Filter',NULL,NULL,NULL),(981,0,'OPRS','Oil Pressure',NULL,NULL,NULL),(982,0,'ORNG','O-Ring',NULL,NULL,NULL),(983,0,'OSEL','Oil Seal',NULL,NULL,NULL),(984,0,'OTHR','Other (specify in long text)',NULL,NULL,NULL),(985,0,'PCKG','Packing / Gland Packing',NULL,NULL,NULL),(986,0,'PCKX','Packing Set Stuffing Box',NULL,NULL,NULL),(987,0,'PIND','Press Indicator',NULL,NULL,NULL),(988,0,'PULY','Pulley',NULL,NULL,NULL),(989,0,'PXXG','Packing Ring',NULL,NULL,NULL),(990,0,'RBLW','Rubber Bellows Mech. Seal',NULL,NULL,NULL),(991,0,'RECR','Recorder (Press, Temp, Flow, Level)',0,0,''),(992,0,'RING','Ring',NULL,NULL,NULL),(993,0,'RPST','Rubber Piston',NULL,NULL,NULL),(994,0,'SCVV','Suction Control Valve',NULL,NULL,NULL),(995,0,'SEAL','Seal',NULL,NULL,NULL),(996,0,'SEAT','Seat',NULL,NULL,NULL),(997,0,'SETT','Setting Device',NULL,NULL,NULL),(998,0,'SFVV','Valve, Safety',0,NULL,NULL),(999,0,'SLVE','Sleeve',NULL,NULL,NULL),(1000,0,'SPRG','Spring',NULL,NULL,NULL),(1001,0,'STRN','Strainers',NULL,NULL,NULL),(1002,0,'SUVV','Valve Suction',NULL,NULL,NULL),(1003,0,'TCPL','Thermocouple',NULL,NULL,NULL),(1004,0,'VBEL','V - Belt',NULL,NULL,NULL),(1005,0,'VENT','Venting / Vent Line',NULL,NULL,NULL),(1006,0,'VLVE','Valve',NULL,NULL,NULL),(1007,0,'VSEL','Pressure Vessel (Drum, Scrubber, Column)',0,0,NULL),(1008,0,'XBOX','Stuffing Box',NULL,NULL,NULL),(1009,0,'XBRG','Crosshead Pin Bearing',NULL,NULL,NULL),(1010,0,'XDCR','Tranducer',NULL,NULL,NULL),(1011,0,'XGBX','Gland Stuffing Box',NULL,NULL,NULL),(1012,0,'XHED','Crosshead',NULL,NULL,NULL),(1013,0,'XPIN','Crosshead Pin',NULL,NULL,NULL),(1014,0,'XSPL','Stuffing Box Spool',NULL,NULL,NULL),(1015,0,'XTMR','Transmitter (Press, Temp, Flow, Level)',0,1,''),(1016,0,'AFLT','Air filter',NULL,1,NULL),(1017,0,'ALTR','Alternator',NULL,1,NULL),(1018,0,'BKER','Circuit Breaker / Contractor',NULL,1,NULL),(1019,0,'BNUT','Bolt & Nut Set',NULL,1,NULL),(1020,0,'BOLT','Bolt',NULL,1,NULL),(1021,0,'BRAK','Brake',NULL,1,NULL),(1022,0,'BRNG','Bearing',NULL,1,NULL),(1023,0,'BRTH','Crankcase Breather',NULL,1,NULL),(1024,0,'BUSH','Bushing',NULL,1,NULL),(1025,0,'CLUC','Clutch',NULL,1,NULL),(1026,0,'COVR','Cover',NULL,1,NULL),(1027,0,'CPIN','Cotter Pin',NULL,1,NULL),(1028,0,'CPLG','Coupling',NULL,1,NULL),(1029,0,'DISC','Disc',NULL,1,NULL),(1030,0,'ELMT','Element',NULL,1,NULL),(1031,0,'EPNL','Engine panel',NULL,1,NULL),(1032,0,'ESYS','Electrical Control System',NULL,1,NULL),(1033,0,'FANN','Fan Blade',NULL,1,NULL),(1034,0,'FLTR','Lube / Seal Oil Filter',NULL,1,NULL),(1035,0,'FPRS','Fuel pressure',NULL,1,NULL),(1036,0,'FRAM','Frame',NULL,1,NULL),(1037,0,'FREG','Fuel regulator',NULL,NULL,NULL),(1038,0,'FUSE','Fuse',NULL,NULL,NULL),(1039,0,'FWHL','Flywheel',NULL,NULL,NULL),(1040,0,'GAUG','Gauge',NULL,NULL,NULL),(1041,0,'GBOX','Gearbox',NULL,NULL,NULL),(1042,0,'GEAR','Gear',NULL,NULL,NULL),(1043,0,'GRES','Grease',NULL,NULL,NULL),(1044,0,'GSKT','Gasket',NULL,NULL,NULL),(1045,0,'HOSE','Hose',NULL,NULL,NULL),(1046,0,'HSYS','Hydraulic Control System',NULL,NULL,NULL),(1047,0,'ICTR','Indicator (Press, Temp, Flow, Level)',0,0,''),(1048,0,'IJCT','Injector Assembly',NULL,NULL,NULL),(1049,0,'INCT','Indicator',NULL,NULL,NULL),(1050,0,'INJC','Injection pump',NULL,NULL,NULL),(1051,0,'ISYS','Instrument System',NULL,NULL,NULL),(1052,0,'JOIN','Flexible Joint',NULL,NULL,NULL),(1053,0,'LAMP','Lamp',NULL,NULL,NULL),(1054,0,'LNER','Liner',NULL,NULL,NULL),(1055,0,'LUBE','Lube Oil',NULL,NULL,NULL),(1056,0,'MBRG','Metal Bearing',NULL,NULL,NULL),(1057,0,'MOST','Motor for Starting',NULL,NULL,NULL),(1058,0,'MUFL','Muffler',NULL,NULL,NULL),(1059,0,'NOZL','Nozzle',NULL,NULL,NULL),(1060,0,'NUTT','Nut',NULL,NULL,NULL),(1061,0,'OFLT','Oil Filter',NULL,NULL,NULL),(1062,0,'OPRS','Oil Pressure',NULL,NULL,NULL),(1063,0,'ORNG','O-Ring',NULL,NULL,NULL),(1064,0,'OSEL','Oil Seal',NULL,NULL,NULL),(1065,0,'OTHR','Other (specify in long text)',NULL,NULL,NULL),(1066,0,'PINN','Pin',NULL,NULL,NULL),(1067,0,'PLEY','Pulley',NULL,NULL,NULL),(1068,0,'PLNG','Plunger',NULL,NULL,NULL),(1069,0,'PRNG','Piston Ring',NULL,NULL,NULL),(1070,0,'RADT','Radiator',NULL,NULL,NULL),(1071,0,'RLAY','Relay',NULL,NULL,NULL),(1072,0,'RLNR','Ring Liner',NULL,NULL,NULL),(1073,0,'RODD','Rod',NULL,NULL,NULL),(1074,0,'RPST','Rod. Piston',NULL,NULL,NULL),(1075,0,'SEAL','Seal',NULL,NULL,NULL),(1076,0,'SFVV','Valve, Safety',0,NULL,NULL),(1077,0,'SHFT','Shaft',NULL,NULL,NULL),(1078,0,'SHIM','Shim',NULL,NULL,NULL),(1079,0,'SHVE','Sheave',NULL,NULL,NULL),(1080,0,'SPRG','Spring',NULL,NULL,NULL),(1081,0,'STRT','Starter',NULL,NULL,NULL),(1082,0,'SWIC','Switch',NULL,NULL,NULL),(1083,0,'TANK','Tank',NULL,NULL,NULL),(1084,0,'TCPL','Thermocouple',NULL,NULL,NULL),(1085,0,'TORQ','Torque Conventer',NULL,NULL,NULL),(1086,0,'TURB','Turbocharger',NULL,NULL,NULL),(1087,0,'VBLR','Valve Bridge & Lash, Rotators',0,NULL,NULL),(1088,0,'VBLT','Vee Type Belt',NULL,NULL,NULL),(1089,0,'VDMP','Vibration Damper',NULL,NULL,NULL),(1090,0,'VLVE','Valve',NULL,NULL,NULL),(1091,0,'WASH','Washer',NULL,NULL,NULL),(1092,0,'WHCX','Wheel (Chain type)',NULL,NULL,NULL),(1093,0,'WHEL','Wheel',NULL,NULL,NULL),(1094,0,'WHRX','Wheel ( Rubber Tyre type)',NULL,NULL,NULL),(1095,0,'WHSX','Wheel (Steel Drum Type)',NULL,NULL,NULL),(1096,0,'WPMP','Water Pumps',NULL,NULL,NULL),(1097,0,'WTRG','Water Temperature Regulators',NULL,NULL,NULL),(1098,0,'XHOS','Exhaust',NULL,NULL,NULL),(1099,0,'GRND','Grounding Cable',NULL,NULL,NULL),(1100,0,'GSKT','Gasket',NULL,NULL,NULL),(1101,0,'HETR','Heater',NULL,NULL,NULL),(1102,0,'INSL','Insulation',NULL,NULL,NULL),(1103,0,'INSR','Insulator',NULL,NULL,NULL),(1104,0,'LPRO','Lightening Protector',NULL,NULL,NULL),(1105,0,'MOTR','Motor',NULL,NULL,NULL),(1106,0,'OCRY','Over Current Relay',NULL,NULL,NULL),(1107,0,'OHRY','Overheat Protector Relay',NULL,NULL,NULL),(1108,0,'OLRY','Overload Relay',NULL,NULL,NULL),(1109,0,'OTHR','Other (specify in long text)',NULL,NULL,NULL),(1110,0,'PCBS','Printed Circuit Board',NULL,NULL,NULL),(1111,0,'SFRM','Stator Frame',NULL,NULL,NULL),(1112,0,'SGER','Switchgear',NULL,NULL,NULL),(1113,0,'STRT','Starter',NULL,NULL,NULL),(1114,0,'SWIC','Switch',NULL,NULL,NULL),(1115,0,'SWND','Stator Winding',NULL,NULL,NULL),(1116,0,'TCPL','Thermocouple',NULL,NULL,NULL),(1117,0,'TRAF','Transformer',NULL,NULL,NULL),(1118,0,'VOMT','Volt Meter',NULL,NULL,NULL),(1119,0,'XDCR','Tranducer',NULL,NULL,NULL),(1120,0,'BKER','Circuit Breaker / Contractor',NULL,NULL,NULL),(1121,0,'BNUT','Bolt & Nut Set',NULL,NULL,NULL),(1122,0,'BOLT','Bolt',NULL,NULL,NULL),(1123,0,'BREK','Breaker',NULL,NULL,NULL),(1124,0,'CABL','Cable',NULL,NULL,NULL),(1125,0,'CIRC','Main Circuit',NULL,NULL,NULL),(1126,0,'CONT','Contactor',NULL,NULL,NULL),(1127,0,'ELMT','Element',NULL,NULL,NULL),(1128,0,'FUSE','Fuse',NULL,NULL,NULL),(1129,0,'GSKT','Gasket',NULL,NULL,NULL),(1130,0,'ICTR','Indicator (Press, Temp, Flow, Level)',0,0,''),(1131,0,'INSL','Insulation',NULL,NULL,NULL),(1132,0,'INSR','Insulator',NULL,NULL,NULL),(1133,0,'LUBE','Lube Oil',NULL,NULL,NULL),(1134,0,'NUTT','Nut',NULL,NULL,NULL),(1135,0,'OCRY','Over Current Relay',NULL,NULL,NULL),(1136,0,'OHRY','Overheat Protector Relay',NULL,NULL,NULL),(1137,0,'OLRY','Overload Relay',NULL,NULL,NULL),(1138,0,'OTHR','Other (specify in long text)',NULL,NULL,NULL),(1139,0,'SGER','Switchgear',NULL,NULL,NULL),(1140,0,'SWIC','Switch',NULL,NULL,NULL),(1141,0,'WIRE','Wiring',NULL,NULL,NULL),(1142,0,'BCAP','Bubble Cap',NULL,NULL,NULL),(1143,0,'BNUT','Bolt & Nut Set',NULL,NULL,NULL),(1144,0,'BOLT','Bolt',NULL,NULL,NULL),(1145,0,'BREK','Breaker',NULL,NULL,NULL),(1146,0,'BRRL','Pump Barrel',NULL,NULL,NULL),(1147,0,'CAIN','Chain',NULL,NULL,NULL),(1148,0,'CHVV','Check Valve',NULL,NULL,NULL),(1149,0,'COAL','Coalescer',NULL,NULL,NULL),(1150,0,'CYCL','Cyclone',NULL,NULL,NULL),(1151,0,'DCMR','Down Comer Pipe',NULL,NULL,NULL),(1152,0,'DCVV','Discharge Control Valve',NULL,NULL,NULL),(1153,0,'DIST','Distributor Plate',NULL,NULL,NULL),(1154,0,'DMST','Demister',NULL,NULL,NULL),(1155,0,'DRAN','Drain Line and Block Valve',NULL,NULL,NULL),(1156,0,'FCVV','Flow Control Valve',NULL,NULL,NULL),(1157,0,'IDFL','Flow Indicator',NULL,NULL,NULL),(1158,0,'IDLV','Level Indicator',NULL,NULL,NULL),(1159,0,'IDPR','Pressure Indicator',NULL,NULL,NULL),(1160,0,'IDTM','Temperature Indicator',NULL,NULL,NULL),(1161,0,'LVGL','Level Glass',NULL,NULL,NULL),(1162,0,'LVVV','Level Control Valve',NULL,NULL,NULL),(1163,0,'ONOF','On &Off Tools',NULL,NULL,NULL),(1164,0,'OTHR','Other (specify in long text)',NULL,NULL,NULL),(1165,0,'PCVV','Pressure Control Valve',NULL,NULL,NULL),(1166,0,'PLGR','Plunger Pump',NULL,NULL,NULL),(1167,0,'SCKR','Sucker Rod',NULL,NULL,NULL),(1168,0,'SCVV','Suction Control Valve',NULL,NULL,NULL),(1169,0,'SFVV','Safety Relief Valve',NULL,NULL,NULL),(1170,0,'SRIN','Sucker Rod Thread Inside',NULL,NULL,NULL),(1171,0,'SROU','Sucker Rod Thread Outside',NULL,NULL,NULL),(1172,0,'TBNG','Tubing',NULL,NULL,NULL),(1173,0,'TRIN','Tubing Thread Inside',NULL,NULL,NULL),(1174,0,'TROU','Tubing Thread Outside',NULL,NULL,NULL),(1175,0,'VENT','Vent Line and Block Valve',NULL,NULL,NULL),(1176,0,'VLVE','Valve',NULL,NULL,NULL),(1177,0,'VORX','Vortex Breaker',NULL,NULL,NULL),(1178,0,'XRFL','Flow Controller',NULL,NULL,NULL),(1179,0,'XRLV','Level Controller',NULL,NULL,NULL),(1180,0,'XRPR','Pressure Controller',NULL,NULL,NULL),(1181,0,'XRTM','Temperature Controller',NULL,NULL,NULL),(1182,0,'XTFL','Flow Transmitter',NULL,NULL,NULL),(1183,0,'XTLV','Level Transmitter',NULL,NULL,NULL),(1184,0,'XTMR','Transmitter (Press, Temp, Flow, Level)',0,0,''),(1185,0,'XTPR','Pressure Transmitter',NULL,NULL,NULL),(1186,0,'XTTM','Temperature Transmitter',NULL,NULL,NULL),(1187,0,'ACLR','After Cooler',NULL,NULL,NULL),(1188,0,'ACPL','Accessory Couplin',NULL,NULL,NULL),(1189,0,'ACTR','Actuator',NULL,NULL,NULL),(1190,0,'ADTR','Adaptor',NULL,NULL,NULL),(1191,0,'AFLT','Air filter',NULL,NULL,NULL),(1192,0,'ALRM','Alarm',NULL,NULL,NULL),(1193,0,'ALTR','Alternator',NULL,NULL,NULL),(1194,0,'ASTR','Air starting',NULL,NULL,NULL),(1195,0,'ASVV','Valve Assembly',NULL,NULL,NULL),(1196,0,'BLAD','Turbine blade',NULL,NULL,NULL),(1197,0,'BLDV','Balance Device',NULL,NULL,NULL),(1198,0,'BLVV','Valve, Bleed',0,NULL,NULL),(1199,0,'BNUT','Bolt & Nut Set',NULL,NULL,NULL),(1200,0,'BOLT','Bolt',NULL,NULL,NULL),(1201,0,'BRCL','Bearing Clamp',NULL,NULL,NULL),(1202,0,'BRNG','Bearing',NULL,NULL,NULL),(1203,0,'BRNR','Burner',NULL,NULL,NULL),(1204,0,'BRRE','Bearing Retainer',NULL,NULL,NULL),(1205,0,'BRSP','Bearing Spacer',NULL,NULL,NULL),(1206,0,'BRTH','Crankcase Breather',NULL,NULL,NULL),(1207,0,'BUSH','Bushing',NULL,NULL,NULL),(1208,0,'BXXR','Backing Ring',NULL,NULL,NULL),(1209,0,'BZER','Buzzer',NULL,NULL,NULL),(1210,0,'CHVV','Check Valve',NULL,NULL,NULL),(1211,0,'CIRC','Main Circuit',NULL,NULL,NULL),(1212,0,'CLNT','Water/SCA Type Coolant',NULL,NULL,NULL),(1213,0,'CLUC','Clutch',NULL,NULL,NULL),(1214,0,'CNVV','Control Valve (Press, Temp, Flow, Level)',0,0,''),(1215,0,'COBE','Cover Bearing',NULL,NULL,NULL),(1216,0,'COBL','Compressor blade',NULL,NULL,NULL),(1217,0,'COBR','Collector Brushes',NULL,NULL,NULL),(1218,0,'COCO','Cover Coupling',NULL,NULL,NULL),(1219,0,'COHE','Combustor head',NULL,NULL,NULL),(1220,0,'COMB','Combustor',NULL,NULL,NULL),(1221,0,'CONT','Contactor',NULL,NULL,NULL),(1222,0,'COPP','Column Pipe',NULL,NULL,NULL),(1223,0,'COVA','Cover Valve',NULL,NULL,NULL),(1224,0,'COVR','Cover',NULL,NULL,NULL),(1225,0,'CPIN','Cotter Pin',NULL,NULL,NULL),(1226,0,'CPLG','Coupling',NULL,NULL,NULL),(1227,0,'CTRL','Controller (Press, Temp, Flow, Level)',0,0,''),(1228,0,'DFLT','Deflector',NULL,NULL,NULL),(1229,0,'DIFS','Diffuser',NULL,NULL,NULL),(1230,0,'DISC','Disc',NULL,NULL,NULL),(1231,0,'DIVV','Valve Discharge',NULL,NULL,NULL),(1232,0,'DOWL','Dowel Pin',NULL,NULL,NULL),(1233,0,'DPRM','Diaphragm',NULL,NULL,NULL),(1234,0,'ELMT','Element',NULL,NULL,NULL),(1235,0,'EPNL','Engine panel',NULL,NULL,NULL),(1236,0,'ESYS','Electrical Control System',NULL,NULL,NULL),(1237,0,'FOUN','Foundation',NULL,NULL,NULL),(1238,0,'FPRS','Fuel pressure',NULL,NULL,NULL),(1239,0,'FRAM','Frame',NULL,NULL,NULL),(1240,0,'FRDT','Fire Detector',NULL,NULL,NULL),(1241,0,'FREG','Fuel regulator',NULL,NULL,NULL),(1242,0,'FTBC','Turbine First stage Bucket',NULL,NULL,NULL),(1243,0,'FUSE','Fuse',NULL,NULL,NULL),(1244,0,'GAUG','Gauge',NULL,NULL,NULL),(1245,0,'GBOX','Gearbox',NULL,NULL,NULL),(1246,0,'GEAR','Gear',NULL,NULL,NULL),(1247,0,'GENR','Generator',NULL,NULL,NULL),(1248,0,'GLAN','Gland',NULL,NULL,NULL),(1249,0,'GRES','Grease',NULL,NULL,NULL),(1250,0,'GSKT','Gasket',NULL,NULL,NULL),(1251,0,'GVNR','Governor',NULL,NULL,NULL),(1252,0,'HBRG','Housing Bearing',NULL,NULL,NULL),(1253,0,'HETR','Heater',NULL,NULL,NULL),(1254,0,'HOSE','Hose',NULL,NULL,NULL),(1255,0,'HSNG','Housing',NULL,NULL,NULL),(1256,0,'HUBC','Hub Coupling',NULL,NULL,NULL),(1257,0,'ICSG','Inner casing',NULL,NULL,NULL),(1258,0,'ICTR','Indicator (Press, Temp, Flow, Level)',0,0,''),(1259,0,'IGNT','Ignitor / Spark plug',NULL,NULL,NULL),(1260,0,'INCT','Indicator',NULL,NULL,NULL),(1261,0,'INSL','Insulation',NULL,NULL,NULL),(1262,0,'INSR','Insulator',NULL,NULL,NULL),(1263,0,'ISYS','Instrument System',NULL,NULL,NULL),(1264,0,'JOIN','Flexible Joint',NULL,NULL,NULL),(1265,0,'KEYC','Key Coupling',NULL,NULL,NULL),(1266,0,'KEYY','Key',NULL,NULL,NULL),(1267,0,'LAMP','Lamp',NULL,NULL,NULL),(1268,0,'LBRY','Labirynth',NULL,NULL,NULL),(1269,0,'LCPL','Load Coupling',NULL,NULL,NULL),(1270,0,'LTAN','Lube TAN',NULL,NULL,NULL),(1271,0,'LTBN','Lube TBN',NULL,NULL,NULL),(1272,0,'LUBE','Lube Oil',NULL,NULL,NULL),(1273,0,'LUBR','Lubricator',NULL,NULL,NULL),(1274,0,'MBRG','Metal Bearing',NULL,NULL,NULL),(1275,0,'MOST','Motor for Starting',NULL,NULL,NULL),(1276,0,'NOZL','Nozzle',NULL,NULL,NULL),(1277,0,'NUTT','Nut',NULL,NULL,NULL),(1278,0,'OCRY','Over Current Relay',NULL,NULL,NULL),(1279,0,'OCSG','Outer casing',NULL,NULL,NULL),(1280,0,'OFLT','Oil Filter',NULL,NULL,NULL),(1281,0,'OHRY','Overheat Protector Relay',NULL,NULL,NULL),(1282,0,'OLRY','Overload Relay',NULL,NULL,NULL),(1283,0,'OMTR','Oil Motor',NULL,NULL,NULL),(1284,0,'OPMP','Oil Pump',NULL,NULL,NULL),(1285,0,'OPRS','Oil Pressure',NULL,NULL,NULL),(1286,0,'ORNG','O-Ring',NULL,NULL,NULL),(1287,0,'OSEL','Oil Seal',NULL,NULL,NULL),(1288,0,'OSLV','O-Ring-Sleeve',NULL,NULL,NULL),(1289,0,'OSTA','Over Speed Trip Bolt Assembly',NULL,NULL,NULL),(1290,0,'OTHR','Other (specify in long text)',NULL,NULL,NULL),(1291,0,'PADD','Pad',NULL,NULL,NULL),(1292,0,'PCKG','Packing / Gland Packing',NULL,NULL,NULL),(1293,0,'PCLR','Protecting Collar',NULL,NULL,NULL),(1294,0,'PDEV','Protective Devices',NULL,NULL,NULL),(1295,0,'PIND','Press Indicator',NULL,NULL,NULL),(1296,0,'PINN','Pin',NULL,NULL,NULL),(1297,0,'PIPE','Pipe',NULL,NULL,NULL),(1298,0,'PLUG','Plug',NULL,NULL,NULL),(1299,0,'PRET','Plate Bearing Retainer',NULL,NULL,NULL),(1300,0,'PSYS','Pneumatic Control System',NULL,NULL,NULL),(1301,0,'PXXG','Packing Ring',NULL,NULL,NULL),(1302,0,'QUIL','Quilshaft',NULL,NULL,NULL),(1303,0,'RBLD','Compressor Rotor Blade',NULL,NULL,NULL),(1304,0,'RBRG','Radial Bearing',NULL,NULL,NULL),(1305,0,'RECR','Recorder (Press, Temp, Flow, Level)',0,0,''),(1306,0,'REGT','Regulator',NULL,NULL,NULL),(1307,0,'RFLT','Reflector',NULL,NULL,NULL),(1308,0,'RING','Ring',NULL,NULL,NULL),(1309,0,'RLAY','Relay',NULL,NULL,NULL),(1310,0,'ROTR','Rotor Assembly',NULL,NULL,NULL),(1311,0,'RVLV','Relief Valve',NULL,NULL,NULL),(1312,0,'SBLD','Compressor Stator Blade',NULL,NULL,NULL),(1313,0,'SEAL','Seal',NULL,NULL,NULL),(1314,0,'SEAT','Seat',NULL,NULL,NULL),(1315,0,'SETT','Setting Device',NULL,NULL,NULL),(1316,0,'SFVV','Valve, Safety',0,NULL,NULL),(1317,0,'SHFT','Shaft',NULL,NULL,NULL),(1318,0,'SLVE','Sleeve',NULL,NULL,NULL),(1319,0,'SNSR','Sensor',NULL,NULL,NULL),(1320,0,'SPCR','Spacer',NULL,NULL,NULL),(1321,0,'SPIN','Shear Pin',NULL,NULL,NULL),(1322,0,'SPLG','Spark Plugs',NULL,NULL,NULL),(1323,0,'SPRG','Spring',NULL,NULL,NULL),(1324,0,'SRNG','Shaft Seal Ring',NULL,NULL,NULL),(1325,0,'SSNR','Speed Sensor',NULL,NULL,NULL),(1326,0,'STBC','Turbine Second Stage Bucket',NULL,NULL,NULL),(1327,0,'STEM','Stem',NULL,NULL,NULL),(1328,0,'STRN','Strainers',NULL,NULL,NULL),(1329,0,'STRX','Stator',NULL,NULL,NULL),(1330,0,'STUD','Stud',NULL,NULL,NULL),(1331,0,'SUCT','Inlet / Suction Line',NULL,NULL,NULL),(1332,0,'SUVV','Valve Suction',NULL,NULL,NULL),(1333,0,'SWIC','Switch',NULL,NULL,NULL),(1334,0,'TBCK','Turbine Bucket',NULL,NULL,NULL),(1335,0,'TBRG','Thrust Bearing',NULL,NULL,NULL),(1336,0,'TCPL','Thermocouple',NULL,NULL,NULL),(1337,0,'TIBG','Inlet Guide Vane',NULL,NULL,NULL),(1338,0,'TIDP','Inlet Damper',NULL,NULL,NULL),(1339,0,'TNZL','Tip Nozzle',NULL,NULL,NULL),(1340,0,'TORQ','Torque Conventer',NULL,NULL,NULL),(1341,0,'TSNR','Timing Sensor',NULL,NULL,NULL),(1342,0,'TUBE','Tubing',NULL,NULL,NULL),(1343,0,'VBLR','Valve Bridge & Lash, Rotators',0,NULL,NULL),(1344,0,'VDMP','Vibration Damper',NULL,NULL,NULL),(1345,0,'VENT','Venting / Vent Line',NULL,NULL,NULL),(1346,0,'VLVE','Valve',NULL,NULL,NULL),(1347,0,'WIRE','Wiring',NULL,NULL,NULL),(1348,0,'WPMP','Water Pumps',NULL,NULL,NULL),(1349,0,'WROT','Washer Rotation Mech. Seal',NULL,NULL,NULL),(1350,0,'WTRG','Water Temperature Regulators',NULL,NULL,NULL),(1351,0,'WXXR','Wearing Ring',NULL,NULL,NULL),(1352,0,'XDCR','Tranducer',NULL,NULL,NULL),(1353,0,'XHOS','Exhaust Frame',NULL,NULL,NULL),(1354,0,'XSYS','Exhaust System',NULL,NULL,NULL),(1355,0,'XTER','Exciter',NULL,NULL,NULL),(1356,NULL,'XTRM','Transformer',NULL,1,NULL);
/*!40000 ALTER TABLE `opart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `options`
--

DROP TABLE IF EXISTS `options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `options` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(45) DEFAULT NULL,
  `nilai` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `options`
--

LOCK TABLES `options` WRITE;
/*!40000 ALTER TABLE `options` DISABLE KEYS */;
INSERT INTO `options` VALUES (1,'tole_hari','3'),(2,'waktu_rh_sync',NULL);
/*!40000 ALTER TABLE `options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pmdef`
--

DROP TABLE IF EXISTS `pmdef`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pmdef` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `durasi` int(11) DEFAULT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `ket` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pmdef`
--

LOCK TABLES `pmdef` WRITE;
/*!40000 ALTER TABLE `pmdef` DISABLE KEYS */;
INSERT INTO `pmdef` VALUES (1,1500,'PM1500',NULL),(2,4500,'PM4500',NULL),(3,9000,'PM9000',NULL),(4,18000,'PM18000',NULL),(5,36000,'PM36000',NULL),(6,72000,'PM72000',NULL),(7,750,'PM750',NULL),(8,3000,'PM3000',NULL),(9,12000,'PM12000',NULL),(10,24000,'PM24000',NULL),(11,48000,'PM48000',NULL);
/*!40000 ALTER TABLE `pmdef` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pmlist`
--

DROP TABLE IF EXISTS `pmlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pmlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `eqcat` int(11) NOT NULL,
  `pm` int(11) NOT NULL,
  `ket` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pmlist`
--

LOCK TABLES `pmlist` WRITE;
/*!40000 ALTER TABLE `pmlist` DISABLE KEYS */;
INSERT INTO `pmlist` VALUES (1,10,1,NULL),(2,10,2,NULL),(3,10,3,NULL),(4,10,4,NULL),(5,10,5,NULL),(6,10,6,NULL),(7,11,1,NULL),(8,11,2,NULL),(9,11,3,NULL),(10,11,5,NULL),(11,12,7,NULL),(12,12,8,NULL),(13,12,9,NULL),(14,12,10,NULL),(15,8,2,NULL),(16,8,3,NULL),(17,8,4,NULL),(18,8,5,NULL),(19,8,11,NULL),(20,9,2,NULL),(21,9,3,NULL),(22,9,10,NULL);
/*!40000 ALTER TABLE `pmlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rh_201311`
--

DROP TABLE IF EXISTS `rh_201311`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rh_201311` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `eq` int(11) NOT NULL,
  `rh` float NOT NULL,
  `tgl` date NOT NULL,
  `cat` int(11) NOT NULL,
  `flag` varchar(10) DEFAULT NULL,
  `rh_av` float DEFAULT NULL,
  `rh_re` float DEFAULT NULL,
  `thn` int(11) DEFAULT NULL,
  `bln` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `nx_eq` (`eq`),
  KEY `nx_tgl` (`tgl`)
) ENGINE=InnoDB AUTO_INCREMENT=1503 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rh_201311`
--

LOCK TABLES `rh_201311` WRITE;
/*!40000 ALTER TABLE `rh_201311` DISABLE KEYS */;
INSERT INTO `rh_201311` VALUES (1112,54,23.5,'2014-01-24',0,'e31e32',23.5,23.5,2014,1),(1113,54,18.5,'2013-01-01',0,'e31e32',19.5,22.5,2013,1),(1114,54,24,'2013-01-02',0,'e31e32',24,24,2013,1),(1115,54,16.75,'2013-01-03',0,'e31e32',16.75,24,2013,1),(1479,54,17.25,'2013-02-02',0,'e31e32',17.25,24,2013,2),(1480,54,20.5,'2013-02-03',0,'e31e32',20.5,20.5,2013,2),(1481,2147483647,23.5,'2014-01-24',0,'e',24,24,2014,1),(1482,56,7,'2014-01-28',0,'e35e36',7,24,2014,1),(1483,54,22.5,'2013-12-04',0,'e31e32',22.5,24,2013,12),(1484,54,24,'2014-02-01',5,NULL,NULL,NULL,NULL,NULL),(1485,54,7,'2014-02-02',0,'e31e32',24,24,2014,2),(1486,54,21,'2014-02-03',0,'e31e32',21,21,2014,2),(1487,49,24,'2014-02-07',0,'e39e40',24,24,2014,2),(1488,49,24,'2014-02-08',0,'e39e40',24,24,2014,2),(1489,49,24,'2014-02-09',0,'e39e40',24,24,2014,2),(1490,49,24,'2014-02-10',0,'e39e40',24,24,2014,2),(1491,49,24,'2014-02-11',0,'e39e40',24,24,2014,2),(1492,49,24,'2014-02-12',0,'e39e40',24,24,2014,2),(1493,49,24,'2014-02-13',0,'e39e40',24,24,2014,2),(1494,49,24,'2014-02-14',0,'e39e40',24,24,2014,2),(1495,49,24,'2014-02-15',0,'e39e40',24,24,2014,2),(1496,49,24,'2014-02-16',0,'e39e40',24,24,2014,2),(1497,49,24,'2014-02-17',0,'e39e40',24,24,2014,2),(1498,49,24,'2014-02-18',0,'e39e40',24,24,2014,2),(1499,49,24,'2014-02-19',0,'e39e40',24,24,2014,2),(1500,49,24,'2014-02-20',0,'e39e40',24,24,2014,2),(1501,49,24,'2014-02-21',0,'e39e40',24,24,2014,2),(1502,49,24,'2014-02-22',0,'e39e40',24,24,2014,2);
/*!40000 ALTER TABLE `rh_201311` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sap`
--

DROP TABLE IF EXISTS `sap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sap` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipe` varchar(5) DEFAULT NULL,
  `equip` varchar(30) DEFAULT NULL,
  `damage` varchar(10) DEFAULT NULL,
  `downtime` float DEFAULT NULL,
  `cause` varchar(10) DEFAULT NULL,
  `opart` varchar(10) DEFAULT NULL,
  `biaya` float DEFAULT NULL,
  `act_startt` date DEFAULT NULL,
  `act_startj` time DEFAULT NULL,
  `act_finisht` date DEFAULT NULL,
  `act_finishj` time DEFAULT NULL,
  `loc` int(11) DEFAULT NULL,
  `mainwork` varchar(12) DEFAULT NULL,
  `mat` varchar(6) DEFAULT NULL,
  `noorder` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2585 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sap`
--

LOCK TABLES `sap` WRITE;
/*!40000 ALTER TABLE `sap` DISABLE KEYS */;
INSERT INTO `sap` VALUES (2482,'M1','K-A01A02006','WORN',6,'CDID','VLVE',NULL,'2013-01-16','09:00:00','2013-01-16','15:00:00',2,'MECHTECH',NULL,7100013892),(2483,'M1','K-A01A02006','WORN',6.5,'CDID','RING',NULL,'2013-01-16','09:00:00','2013-01-16','15:00:00',2,'MECHTECH',NULL,7100013893),(2484,'M1','K-A01A02004','WORN',6.3,'CDID','VLVE',NULL,'2013-01-15','09:00:00','2013-01-15','15:00:00',2,'MECHTECH',NULL,7100013894),(2485,'M1','K-A01A02004','WORN',6,'COOD','RING',NULL,'2013-01-15','09:00:00','2013-01-15','15:00:00',2,'MECHTECH',NULL,7100013895),(2486,'M1','HE-A01A05001','JAMM',1,'CMLT','STRT',NULL,'2013-01-18','10:00:00','2013-01-18','11:00:00',5,'PUMPMECH',NULL,7100013896),(2487,'M1','G-A01A14001','LEAK',4,'COOD','MSEL',NULL,'2013-01-21','09:00:00','2013-01-21','13:00:00',14,'PUMPMECH',NULL,7100013912),(2488,'M1','KE-A01A09003','NDMG',1,'COTH','OSEL',NULL,'2013-01-23','13:00:00','2013-01-23','14:00:00',9,'MECHTECH',NULL,7100013940),(2489,'M1','KE-A01A09003','WORN',1,'COOD','BRNG',NULL,'2013-01-23','13:00:00','2013-01-23','14:00:00',9,'MECHTECH',NULL,7100013940),(2490,'M1','KE-A01A09003','NDMG',1,'COTH','SHFT',NULL,'2013-01-23','13:00:00','2013-01-23','14:00:00',9,'MECHTECH',NULL,7100013940),(2491,'M1','KE-A01A09003','WORN',1,'COOD','RING',NULL,'2013-01-23','13:00:00','2013-01-23','14:00:00',9,'MECHTECH',NULL,7100013940),(2492,'M1','KE-A01A05006','CRAK',78,'CMLT','MUFL',NULL,'2013-01-15','10:00:00','2013-01-18','16:00:00',1,'MECHTECH',NULL,7100013941),(2493,'M1','KE-A01A05006','LEAK',78,'CMLT','WJAK',NULL,'2013-01-15','10:00:00','2013-01-18','16:00:00',1,'MECHTECH',NULL,7100013941),(2494,'M1','G-A01A05028','WORN',5,'COOD','BRNG',NULL,'2013-01-13','11:00:00','2013-01-13','16:00:00',5,'PUMPMECH',NULL,7100013946),(2495,'M1','G-A01A05028','WORN',5,'COOD','BLPL',NULL,'2013-01-13','11:00:00','2013-01-13','16:00:00',5,'PUMPMECH',NULL,7100013946),(2496,'M1','G-A01A05028','WORN',5,'COOD','BLDC',NULL,'2013-01-13','11:00:00','2013-01-13','16:00:00',5,'PUMPMECH',NULL,7100013946),(2497,'M1','G-A01A05028','LEAK',5,'COOD','BSEL',NULL,'2013-01-13','11:00:00','2013-01-13','16:00:00',5,'PUMPMECH',NULL,7100013946),(2498,'M1','G-A01A05018','BROK',2,'COOD','ASVV',NULL,'2013-01-10','13:00:00','2013-01-10','15:00:00',1,'PUMPMECH',NULL,7100013947),(2499,'M1','KE-A01A00008','NDMG',41,'COTH','ISYS',NULL,'2013-01-18','23:00:00','2013-01-20','16:00:00',0,'MECHTECH',NULL,7100013960),(2500,'M1','G-A01A06006','LEAK',2,'CMLT','XBOX',NULL,'2013-01-07','09:00:00','2013-01-07','11:00:00',1,'PUMPMECH',NULL,7100013971),(2501,'M1','KE-A01A00002','WORN',1.5,'CMLT','VBLT',NULL,'2013-01-17','19:00:00','2013-01-17','20:30:00',0,'MECHTECH',NULL,7100013983),(2502,'M1','G-A01A01004','LEAK',2,'COOD','PCKG',NULL,'2013-01-29','10:00:00','2013-01-29','12:00:00',1,'PUMPMECH',NULL,7100013995),(2503,'M1','G-A01A00001','WORN',2,'COOD','VLVE',NULL,'2013-01-25','13:00:00','2013-01-25','15:00:00',0,'PUMPMECH',NULL,7100013999),(2504,'M1','G-A01A00002','WORN',2,'COOD','VLVE',NULL,'2013-01-25','15:00:00','2013-01-25','17:00:00',0,'PUMPMECH',NULL,7100014000),(2505,'M1','G-A01A06006','CRAK',2,'COOD','RPST',NULL,'2013-01-29','14:00:00','2013-01-29','16:00:00',1,'PUMPMECH',NULL,7100014002),(2506,'M1','G-A01A12003','LEAK',2,'COOD','PCKG',NULL,'2013-01-26','15:00:00','2013-01-26','17:00:00',12,'PUMPMECH',NULL,7100014003),(2507,'M1','G-A01A05018','WORN',4,'COOD','PCKG',NULL,'2013-01-28','14:00:00','2013-01-28','18:00:00',1,'PUMPMECH',NULL,7100014035),(2508,'M1','KE-A01A03006','BROK',4,'CMLT','VBLT',NULL,'2013-01-23','12:00:00','2013-01-23','16:00:00',3,'MECHTECH',NULL,7100014045),(2509,'M1','G-A01A03001','LEAK',3.5,'COOD','PCKG',NULL,'2013-01-28','11:00:00','2013-01-28','14:30:00',3,'PUMPMECH',NULL,7100014059),(2510,'M1','KE-A01A03006','CRAK',4,'CMMC','COVA',NULL,'2013-01-23','12:00:00','2013-01-23','16:00:00',3,'MECHTECH',NULL,7100014077),(2511,'M1','KE-A01A03006','CRAK',4,'CMMC','SHFT',NULL,'2013-01-23','12:00:00','2013-01-23','16:00:00',3,'MECHTECH',NULL,7100014077),(2512,'M1','PE-A01A03004','NDMG',10,'COTH','ACTR',NULL,'2013-01-12','08:00:00','2013-01-12','18:00:00',3,'MECHTECH',NULL,7100014134),(2513,'M1','KE-A01A06001','LEAK',0.5,'COOD','FREG',NULL,'2013-01-22','17:00:00','2013-01-22','17:30:00',6,'MECHTECH',NULL,7100014305),(2514,'M1','KE-A01A00001','BROK',48,'COOD','SPRG',NULL,'2013-01-17','17:00:00','2013-01-19','17:00:00',0,'MECHTECH',NULL,7100014533),(2515,'M1','KE-A01A00001','LEAK',48,'COOD','SUVV',NULL,'2013-01-17','17:00:00','2013-01-19','17:00:00',0,'MECHTECH',NULL,7100014533),(2516,'M1','KE-A01A00001','LEAK',48,'COOD','DIVV',NULL,'2013-01-17','17:00:00','2013-01-19','17:00:00',0,'MECHTECH',NULL,7100014533),(2517,'M2','KE-A01A05006','WORN',3,'COOD','BRNG',NULL,'2013-01-01','09:00:00','2013-01-01','12:00:00',1,'MECHTECH',NULL,7200005300),(2518,'M2','KE-A01A00001','BROK',23,'COOD','VLVE',NULL,'2013-01-05','18:00:00','2013-01-06','17:00:00',0,'MECHTECH',NULL,7200005422),(2519,'M2','PE-A01A06003','LEAK',1,'COOD','ACTR',NULL,'2013-01-15','10:00:00','2013-01-15','11:00:00',0,'MECHTECH',NULL,7200005421),(2520,'M3','K-A01A09003','NDMG',5,'COTH','OFLT',NULL,'2013-01-17','11:00:00','2013-01-17','16:00:00',9,'MECHTECH',NULL,7300032776),(2521,'M3','K-A01A09003','NDMG',5,'COTH','VLVE',NULL,'2013-01-17','11:00:00','2013-01-17','16:00:00',9,'MECHTECH',NULL,7300032776),(2522,'M3','K-A01A09003','NDMG',5,'COTH','LUBE',NULL,'2013-01-17','11:00:00','2013-01-17','16:00:00',9,'MECHTECH',NULL,7300032776),(2523,'M3','K-A01A02003','NDMG',1,'COTH','LUBE',NULL,'2013-02-03','08:00:00','2013-02-03','09:00:00',2,'MECHTECH',NULL,7300033475),(2524,'M3','K-A01A05001','NDMG',2,'COTH','LUBE',NULL,'2013-01-11','13:00:00','2013-01-11','15:00:00',5,'MECHTECH',NULL,7300034061),(2525,'M3','K-A01A05011','NDMG',2,'COTH','LUBE',NULL,'2013-01-11','10:00:00','2013-01-11','12:00:00',5,'MECHTECH',NULL,7300033979),(2526,'M3','G-A01A05003','WORN',6,'COTH','VLVE',NULL,'2013-01-15','09:00:00','2013-01-15','15:00:00',5,'PUMPMECH',NULL,7300033912),(2527,'M3','G-A01A05003','LEAK',6,'COTH','PCKX',NULL,'2013-01-15','09:00:00','2013-01-15','15:00:00',5,'PUMPMECH',NULL,7300033912),(2528,'M3','G-A01A05003','WORN',6,'COTH','RING',NULL,'2013-01-15','09:00:00','2013-01-15','15:00:00',5,'PUMPMECH',NULL,7300033912),(2529,'M3','G-A01A08003','NDMG',1,'COTH','CPLG',NULL,'2013-01-21','10:00:00','2013-01-21','11:00:00',8,'PUMPMECH',NULL,7300034909),(2530,'M3','K-A01A00003','NDMG',1,'COTH','BNUT',NULL,'2013-02-05','14:00:00','2013-02-05','15:00:00',0,'MECHTECH',NULL,7300034589),(2531,'M3','GE-A01A08003','NDMG',1,'COTH','LUBE',NULL,'2013-01-21','10:00:00','2013-01-21','11:00:00',8,'PUMPMECH',NULL,7300034910),(2532,'M3','GE-A01A08003','NDMG',1,'COTH','RADT',NULL,'2013-01-21','10:00:00','2013-01-21','11:00:00',8,'PUMPMECH',NULL,7300034910),(2533,'M3','G-A01A06004','NDMG',1.5,'COTH','CPLG',NULL,'2013-01-18','09:30:00','2013-01-18','11:00:00',6,'PUMPMECH',NULL,7300034724),(2534,'M3','PG-A01A05008','NDMG',2.5,'COTH','GENR',NULL,'2013-01-07','09:30:00','2013-01-07','12:00:00',5,'ELECTECH',NULL,7300035679),(2535,'M3','KE-A01A03006','NDMG',0.02,'COTH','LUBE',NULL,'2013-01-04','09:14:00','2013-01-04','09:15:00',3,'MECHTECH',NULL,7300035684),(2536,'M3','KE-A01A02008','NDMG',0,'COTH','LUBE',NULL,'0000-00-00','00:00:00','0000-00-00','00:00:00',2,'MECHTECH',NULL,7300035855),(2537,'M3','KE-A01A03005','NDMG',0,'COTH','LUBE',NULL,'0000-00-00','00:00:00','0000-00-00','00:00:00',3,'MECHTECH',NULL,7300035856),(2538,'M3','KE-A01A00002','NDMG',0,'COTH','LUBE',NULL,'0000-00-00','00:00:00','0000-00-00','00:00:00',0,'MECHTECH',NULL,7300035854),(2539,'M3','EM-A01A09003','NDMG',0.5,'COTH','GENR',NULL,'2013-01-19','14:00:00','2013-01-19','14:30:00',9,'ELECTECH',NULL,7300035502),(2540,'M3','PT-A01A06006','NDMG',0,'COTH','XTRM',NULL,'0000-00-00','00:00:00','0000-00-00','00:00:00',6,'ELECTECH',NULL,7300035848),(2541,'M3','PT-A01A06008','NDMG',0,'COTH','XTRM',NULL,'0000-00-00','00:00:00','0000-00-00','00:00:00',6,'ELECTECH',NULL,7300035850),(2542,'M3','PT-A01A06002','NDMG',0,'COTH','XTRM',NULL,'0000-00-00','00:00:00','0000-00-00','00:00:00',6,'ELECTECH',NULL,7300035847),(2543,'M3','PT-A01A06001','NDMG',0,'COTH','XTRM',NULL,'0000-00-00','00:00:00','0000-00-00','00:00:00',6,'ELECTECH',NULL,7300035846),(2544,'M3','PT-A01A06007','NDMG',0,'COTH','XTRM',NULL,'0000-00-00','00:00:00','0000-00-00','00:00:00',6,'ELECTECH',NULL,7300035849),(2545,'M3','GE-A01A02004','NDMG',1.5,'COTH','LUBE',NULL,'2013-01-05','13:00:00','2013-01-05','14:30:00',2,'PUMPMECH',NULL,7300035844),(2546,'M3','KE-A01A00005','NDMG',0.25,'COTH','LUBE',NULL,'2013-01-10','09:15:00','2013-01-10','09:30:00',0,'MECHTECH',NULL,7300036030),(2547,'M3','G-A01A02004','NDMG',1.5,'COTH','CPLG',NULL,'2013-01-05','13:00:00','2013-01-05','14:30:00',2,'PUMPMECH',NULL,7300035843),(2548,'M3','G-A01A05029','NDMG',1,'COTH','BNUT',NULL,'2013-01-07','09:00:00','2013-01-07','10:00:00',5,'PUMPMECH',NULL,7300035838),(2549,'M3','KM-A01A05004','NDMG',0.5,'COTH','MOTR',NULL,'2013-01-10','14:00:00','2013-01-10','14:30:00',5,'ELECTECH',NULL,7300035845),(2550,'M3','PE-A01A09001','NDMG',5,'COTH','OFLT',NULL,'2013-01-14','10:00:00','2013-01-14','15:00:00',1,'MECHTECH',NULL,7300035842),(2551,'M3','PE-A01A09001','NDMG',5,'COTH','AFLT',NULL,'2013-01-14','10:00:00','2013-01-14','15:00:00',1,'MECHTECH',NULL,7300035842),(2552,'M3','PE-A01A09001','NDMG',5,'COTH','LUBE',NULL,'2013-01-14','10:00:00','2013-01-14','15:00:00',1,'MECHTECH',NULL,7300035842),(2553,'M3','GE-A01A05003','NDMG',2,'COTH','LUBE',NULL,'2013-01-25','13:00:00','2013-01-25','15:00:00',2,'MECHTECH',NULL,7300036029),(2554,'M3','KE-A04A09032','NDMG',4,'COTH','OFLT',NULL,'2013-01-20','12:00:00','2013-01-20','16:00:00',6,'MECHTECH',NULL,7300035869),(2555,'M3','KE-A04A09032','NDMG',4,'COTH','LUBE',NULL,'2013-01-20','12:00:00','2013-01-20','16:00:00',6,'MECHTECH',NULL,7300035869),(2556,'M3','PE-A01A05008','NDMG',5,'COTH','LUBE',NULL,'2013-01-07','10:00:00','2013-01-07','15:00:00',5,'MECHTECH',NULL,7300035676),(2557,'M3','PE-A01A05008','NDMG',5,'COTH','OFLT',NULL,'2013-01-07','10:00:00','2013-01-07','15:00:00',5,'MECHTECH',NULL,7300035676),(2558,'M3','KE-A01A09003','NDMG',5,'COTH','SPLG',NULL,'2013-01-17','11:00:00','2013-01-17','16:00:00',9,'MECHTECH',NULL,7300035824),(2559,'M3','KE-A01A09003','NDMG',5,'COTH','OFLT',NULL,'2013-01-17','11:00:00','2013-01-17','16:00:00',9,'MECHTECH',NULL,7300035824),(2560,'M3','KE-A01A09003','NDMG',5,'COTH','LUBE',NULL,'2013-01-17','11:00:00','2013-01-17','16:00:00',9,'MECHTECH',NULL,7300035824),(2561,'M3','G-A01A14007','NDMG',1,'COTH','CPLG',NULL,'2013-01-21','15:00:00','2013-01-21','16:00:00',14,'PUMPMECH',NULL,7300036249),(2562,'M3','G-A01A14007','NDMG',1,'COTH','BNUT',NULL,'2013-01-21','15:00:00','2013-01-21','16:00:00',14,'PUMPMECH',NULL,7300036249),(2563,'M3','GE-A01A06004','NDMG',1.5,'COTH','LUBE',NULL,'2013-01-18','09:30:00','2013-01-18','11:00:00',6,'PUMPMECH',NULL,7300036267),(2564,'M3','GE-A01A06004','NDMG',1.5,'COTH','OFLT',NULL,'2013-01-18','09:30:00','2013-01-18','11:00:00',6,'PUMPMECH',NULL,7300036267),(2565,'M3','GE-A01A06002','NDMG',3,'COTH','OFLT',NULL,'2013-01-28','09:00:00','2013-01-28','12:00:00',4,'MECHTECH',NULL,7300036014),(2566,'M3','G-A01A05028','NDMG',2.5,'COTH','BNUT',NULL,'2013-01-29','09:30:00','2013-01-29','12:00:00',5,'PUMPMECH',NULL,7300036449),(2567,'M3','PE-A01A00003','NDMG',0,'COTH','LUBE',NULL,'0000-00-00','00:00:00','0000-00-00','00:00:00',0,'MECHTECH',NULL,7300036270),(2568,'M3','KE-A01A06002','NDMG',0,'COTH','LUBE',NULL,'0000-00-00','00:00:00','0000-00-00','00:00:00',6,'MECHTECH',NULL,7300036480),(2569,'M3','PE-A01A03004','NDMG',0,'COTH','LUBE',NULL,'0000-00-00','00:00:00','0000-00-00','00:00:00',3,'MECHTECH',NULL,7300036479),(2570,'M3','GM-A01A05031','NDMG',0,'COTH','MOTR',NULL,'0000-00-00','00:00:00','0000-00-00','00:00:00',5,'ELECTECH',NULL,7300036455),(2571,'M3','GM-A01A05003','NDMG',2,'COTH','MOTR',NULL,'2013-01-15','09:00:00','2013-01-15','11:00:00',5,'ELECTECH',NULL,7300035839),(2572,'M3','KE-A01A03006','NDMG',3,'COTH','OFLT',NULL,'2013-01-23','14:00:00','2013-01-23','17:00:00',3,'MECHTECH',NULL,7300036125),(2573,'M3','KE-A01A03005','NDMG',3,'COTH','OFLT',NULL,'2013-01-24','11:00:00','2013-01-24','14:00:00',3,'MECHTECH',NULL,7300036135),(2574,'M3','KE-A01A03005','NDMG',3,'COTH','LUBE',NULL,'2013-01-24','11:00:00','2013-01-24','14:00:00',3,'MECHTECH',NULL,7300036135),(2575,'M3','KE-A01A00002','NDMG',4,'COTH','LUBE',NULL,'2013-01-29','13:00:00','2013-01-29','17:00:00',0,'MECHTECH',NULL,7300036446),(2576,'M3','EM-A01A09002','WORN',6,'CMLT','BRNG',NULL,'2013-01-31','10:00:00','2013-01-31','16:00:00',6,'ELECTECH',NULL,7300035841),(2577,'M3','PG-A01A09003','WORN',55.5,'CMLT','GENR',NULL,'2013-01-29','09:00:00','2013-01-31','16:30:00',6,'ELECTECH',NULL,7300036250),(2578,'M3','GM-A01A14007','NDMG',1,'COTH','MOTR',NULL,'2013-02-11','14:00:00','2013-02-11','15:00:00',14,'ELECTECH',NULL,7300036245),(2579,'M3','PE-A01A09002','NDMG',2,'COTH','OFLT',NULL,'2013-02-04','09:00:00','2013-02-04','11:00:00',12,'MECHTECH',NULL,7300036025),(2580,'M3','KM-A01A00003','NDMG',0.17,'COTH','MOTR',NULL,'2013-02-10','13:50:00','2013-02-10','14:00:00',0,'ELECTECH',NULL,7300036027),(2581,'M3','PE-A01A09003','NDMG',81,'COTH','OFLT',NULL,'2013-01-28','08:00:00','2013-01-31','17:00:00',6,'MECHTECH',NULL,7300035826),(2582,'M3','PE-A01A09003','WORN',81,'CMLT','CYHD',NULL,'2013-01-28','08:00:00','2013-01-31','17:00:00',6,'MECHTECH',NULL,7300035826),(2583,'M3','PE-A01A09003','WORN',81,'CMLT','SPLG',NULL,'2013-01-28','08:00:00','2013-01-31','17:00:00',6,'MECHTECH',NULL,7300035826),(2584,'M3','PG-A01A09001','NDMG',2,'COTH','GENR',NULL,'2013-02-12','10:00:00','2013-02-12','12:00:00',1,'ELECTECH',NULL,7300035657);
/*!40000 ALTER TABLE `sap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `symptoms`
--

DROP TABLE IF EXISTS `symptoms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `symptoms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kode` varchar(5) NOT NULL,
  `nama` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `kode_UNIQUE` (`kode`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `symptoms`
--

LOCK TABLES `symptoms` WRITE;
/*!40000 ALTER TABLE `symptoms` DISABLE KEYS */;
INSERT INTO `symptoms` VALUES (1,'ABFL','Abnormal Flow'),(2,'ABNS','Abnormal Noise'),(3,'ABPD','Abnormal Production'),(4,'ABPS','Abnormal Pressure'),(5,'ABPW','Abnormal Power'),(6,'ABTP','Abnormal Temperature'),(7,'ABVB','Abnormal Vibration'),(8,'CORO','Corrosion'),(9,'ELER','Electrical Problem'),(10,'ERRD','Error Indicator on Display'),(11,'INER','Instrumentation Problem'),(12,'LEAK','Leakage'),(13,'LUBD','Lubrication Degradation'),(14,'MEER','Mechanical Problem'),(15,'NOSM','No Symptom (EP03 Only)'),(16,'SMEL','Smell'),(17,'SMOK','Smoke'),(18,'STLN','Stolen (Dicuri)'),(21,'DCAP','Unit Is De-Rated Capacity (RDPW , XXQQ)'),(22,'FLPR','Pressure Fluctuated ( XXPR)'),(23,'FMCM','No Air To Comb Chamber (NAIRr)'),(24,'HEAT','Heated / Hot (HHTM)'),(25,'NADJ','Could Not Adjust Pressure (NAPR)'),(26,'NAIR','No Air To System NOAR'),(27,'NIGT','No Power In Ignitor (NOFR)'),(28,'NOGS','No Fuel To Comb Chamber (Nmcm)'),(29,'NOPR','No Pressure In The System (NOPR)'),(30,'NOPW','No Electrical Power'),(31,'NPMP','Not Pumping Any Liquid'),(32,'NSTP','Unit Could Not Stop'),(33,'NSTR','Unit Could Not Start'),(34,'NTRP','Unit Could Not Be Tripped'),(35,'NXFX','No Flows To System (NOFLl)'),(36,'OLFL','No Flow In The System (NFLO , NOFL)'),(37,'OTHR','Other (specify in long text)'),(38,'POSH','Position Shifting'),(39,'RLFL','Not Enough Flow To The System'),(40,'RLPR','Not Enough Pressure In The System'),(41,'RLSH','Not Enough Suction Head Llsh'),(42,'TRIP','Trip Whihout any alarm or indication'),(43,'UADJ','Unable To Adjust To Desired Point'),(44,'UCTR','Unable To Control The System As Designed'),(45,'UPST','Unable To Permissive Start'),(46,'URSP','Unable To Reduce Speed'),(47,'USRV','Unable To Serve As Designed'),(48,'USTP','Unable To Stop'),(49,'USTR','Unable To Start'),(50,'UXPW','Unable To Increase Power'),(51,'UXSP','Unable To Increase The Speed'),(52,'XADJ','Control System Out Of Adjustment XXAJ'),(53,'XCAL','Control System Out Of Calibration XXCA'),(54,'XSET','Control System Out Of Setting XXST'),(55,'XVIB','EXCESSIVE VIBRATION'),(56,'PMPO','Pump Off'),(57,'PMPS','Pump Stuck'),(58,'SCRD','Sucker Rod Detached (Lepas)'),(59,'TBDT','Tubing Detached (Lepas)'),(60,'TBLE','Tubing Leak (Tubing Bocor)');
/*!40000 ALTER TABLE `symptoms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unitdef`
--

DROP TABLE IF EXISTS `unitdef`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `unitdef` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(45) DEFAULT NULL,
  `ket` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unitdef`
--

LOCK TABLES `unitdef` WRITE;
/*!40000 ALTER TABLE `unitdef` DISABLE KEYS */;
/*!40000 ALTER TABLE `unitdef` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unitlist`
--

DROP TABLE IF EXISTS `unitlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `unitlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `input` varchar(45) DEFAULT NULL,
  `kategori` varchar(45) DEFAULT NULL,
  `sumber` varchar(45) DEFAULT NULL,
  `tag` varchar(45) DEFAULT NULL,
  `nama` varchar(45) DEFAULT NULL,
  `kode` varchar(45) DEFAULT NULL,
  `ket` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unitlist`
--

LOCK TABLES `unitlist` WRITE;
/*!40000 ALTER TABLE `unitlist` DISABLE KEYS */;
/*!40000 ALTER TABLE `unitlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `akses` int(11) DEFAULT NULL,
  `nama` varchar(45) DEFAULT NULL,
  `ket` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `waktudown`
--

DROP TABLE IF EXISTS `waktudown`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `waktudown` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `server` tinyint(4) DEFAULT NULL,
  `eqid` int(11) DEFAULT NULL,
  `unit_id` int(11) DEFAULT NULL,
  `downt` date DEFAULT NULL,
  `downj` time DEFAULT NULL,
  `upt` date DEFAULT NULL,
  `upj` time DEFAULT NULL,
  `startt` date DEFAULT NULL,
  `startj` time DEFAULT NULL,
  `endt` date DEFAULT NULL,
  `endj` time DEFAULT NULL,
  `event` tinyint(4) DEFAULT NULL,
  `tipeev` tinyint(4) DEFAULT NULL,
  `nginput` datetime DEFAULT NULL,
  `ket` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=400 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `waktudown`
--

LOCK TABLES `waktudown` WRITE;
/*!40000 ALTER TABLE `waktudown` DISABLE KEYS */;
INSERT INTO `waktudown` VALUES (376,1,31,54,'2014-01-24','01:15:00','2014-01-24','01:45:00','2014-01-24','01:15:00','2014-01-24','01:45:00',4,0,'2014-01-26 07:48:14',''),(377,1,32,54,'2014-01-24','01:15:00','2014-01-24','01:45:00','2014-01-24','01:15:00','2014-01-24','01:45:00',4,0,'2014-01-26 07:48:14',''),(378,1,31,54,'2013-01-01','00:30:00','2013-01-01','02:00:00','2013-01-01','00:30:00','2013-01-01','02:00:00',4,0,'2014-01-26 08:08:06',''),(379,1,32,54,'2013-01-01','00:30:00','2013-01-01','02:00:00','2013-01-01','00:30:00','2013-01-01','02:00:00',4,0,'2014-01-26 08:08:06',''),(382,1,31,54,'2013-01-01','02:00:00','2013-01-01','03:00:00',NULL,NULL,NULL,NULL,1,NULL,'2014-01-26 08:10:47',''),(383,1,32,54,'2013-01-01','02:00:00','2013-01-01','03:00:00',NULL,NULL,NULL,NULL,1,NULL,'2014-01-26 08:10:47',''),(384,1,31,54,'2013-01-01','04:00:00','2013-01-01','07:00:00','2013-01-01','04:00:00','2013-01-01','07:00:00',2,0,'2014-01-26 08:12:02',''),(385,1,32,54,'2013-01-01','04:00:00','2013-01-01','07:00:00','2013-01-01','04:00:00','2013-01-01','07:00:00',2,1,'2014-01-26 08:12:02',''),(386,1,31,54,'2013-01-03','01:30:00','2013-01-03','08:45:00','2013-01-03','01:30:00','2013-01-03','08:45:00',3,0,'2014-01-26 08:12:36',''),(387,1,32,54,'2013-01-03','01:30:00','2013-01-03','08:45:00','2013-01-03','01:30:00','2013-01-03','08:45:00',3,0,'2014-01-26 08:12:36',''),(388,1,31,54,'2013-02-02','01:00:00','2013-02-02','07:45:00','2013-02-02','01:00:00','2013-02-02','07:45:00',2,3,'2014-01-26 08:21:47',''),(389,1,32,54,'2013-02-02','01:00:00','2013-02-02','07:45:00','2013-02-02','01:00:00','2013-02-02','07:45:00',2,0,'2014-01-26 08:21:47',''),(390,1,31,54,'2013-02-03','01:45:00','2013-02-03','05:15:00','2013-02-03','01:45:00','2013-02-03','05:15:00',4,0,'2014-01-26 08:22:10',''),(391,1,32,54,'2013-02-03','01:45:00','2013-02-03','05:15:00','2013-02-03','01:45:00','2013-02-03','05:15:00',4,0,'2014-01-26 08:22:10',''),(392,1,35,56,'2014-01-28','07:00:00','1970-01-01','07:00:00','1970-01-01','07:00:00','1970-01-01','07:00:00',3,0,'2014-02-03 05:00:14','Mencoba jaya!'),(393,1,36,56,'2014-01-28','07:00:00','1970-01-01','07:00:00','1970-01-01','07:00:00','1970-01-01','07:00:00',3,0,'2014-02-03 05:00:14','Mencoba jaya!'),(394,1,31,54,'2013-12-04','01:30:00','2013-12-04','03:00:00','2013-12-04','01:30:00','2013-12-04','03:00:00',3,0,'2014-02-05 21:47:22',''),(395,1,32,54,'2013-12-04','01:30:00','2013-12-04','03:00:00','2013-12-04','01:30:00','2013-12-04','03:00:00',3,0,'2014-02-05 21:47:23',''),(396,1,31,54,'2014-02-02','07:00:00','1970-01-01','07:00:00',NULL,NULL,NULL,NULL,1,NULL,'2014-02-12 22:28:44',''),(397,1,32,54,'2014-02-02','07:00:00','1970-01-01','07:00:00',NULL,NULL,NULL,NULL,1,NULL,'2014-02-12 22:28:44',''),(398,1,31,54,'2014-02-03','21:00:00','2013-12-03','21:30:00','2014-02-03','07:00:00','2013-12-03','21:30:00',4,0,'2014-02-12 22:32:07',''),(399,1,32,54,'2014-02-03','21:00:00','2013-12-03','21:30:00','2014-02-03','07:00:00','2013-12-03','21:30:00',4,0,'2014-02-12 22:32:07','');
/*!40000 ALTER TABLE `waktudown` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-04-24  7:31:05

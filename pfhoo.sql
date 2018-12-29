/*
Navicat MySQL Data Transfer

Source Server         : cherry
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : pfhoo

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-12-29 18:02:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `guid` varchar(40) NOT NULL,
  `qty` varchar(30) NOT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`guid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES ('2', '1', 'aa');
INSERT INTO `car` VALUES ('5', '3', 'cc');
INSERT INTO `car` VALUES ('28', '4', '');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` float(10,0) unsigned NOT NULL,
  `saleqty` int(10) unsigned NOT NULL,
  `settime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', 'images/goodlist/bracelet.jpg', '蝴蝶花造型纯银手链', '200', '300', '2018-12-25 19:53:41');
INSERT INTO `goods` VALUES ('2', 'images/goodlist/bracelet1.jpg', '蝴蝶花造型纯银手链', '200', '300', '2018-12-25 19:53:36');
INSERT INTO `goods` VALUES ('3', 'images/goodlist/bracelet2.jpg', '蝴蝶花造型纯银手链', '200', '300', '2018-12-25 19:53:46');
INSERT INTO `goods` VALUES ('4', 'images/goodlist/bracelet3.jpg', '蝴蝶花造型纯银手链', '200', '300', '2018-12-25 19:53:47');
INSERT INTO `goods` VALUES ('5', 'images/goodlist/bracelet4.jpg', '蝴蝶花造型纯银手链', '200', '300', '2018-12-25 19:53:47');
INSERT INTO `goods` VALUES ('6', 'images/goodlist/bracelet5.jpg', '蝴蝶花造型纯银手链', '200', '300', '2018-12-25 19:53:48');
INSERT INTO `goods` VALUES ('7', 'images/goodlist/bracelet6.jpg', '蝴蝶花造型纯银手链', '200', '300', '2018-12-25 19:53:48');
INSERT INTO `goods` VALUES ('8', 'images/goodlist/bracelet7.jpg', '蝴蝶花造型纯银手链', '200', '300', '2018-12-25 19:53:51');
INSERT INTO `goods` VALUES ('9', 'images/goodlist/earring1.jpg', '粉红微镶仿真钻耳环', '400', '1118', '2018-12-25 19:58:12');
INSERT INTO `goods` VALUES ('10', 'images/goodlist/earring2.jpg', '粉红微镶仿真钻耳环', '400', '1118', '2018-12-25 19:58:14');
INSERT INTO `goods` VALUES ('11', 'images/goodlist/earring3.jpg', '粉红微镶仿真钻耳环', '400', '1118', '2018-12-25 19:58:15');
INSERT INTO `goods` VALUES ('12', 'images/goodlist/earring4.jpg', '粉红微镶仿真钻耳环', '400', '1118', '2018-12-25 19:58:15');
INSERT INTO `goods` VALUES ('13', 'images/goodlist/earring5.jpg', '粉红微镶仿真钻耳环', '400', '1118', '2018-12-25 19:58:15');
INSERT INTO `goods` VALUES ('14', 'images/goodlist/earring6.jpg', '粉红微镶仿真钻耳环', '400', '1118', '2018-12-25 19:58:23');
INSERT INTO `goods` VALUES ('15', 'images/goodlist/earring7.jpg', '粉红微镶仿真钻耳环', '400', '1118', '2018-12-25 19:58:24');
INSERT INTO `goods` VALUES ('16', 'images/goodlist/earring8.jpg', '粉红微镶仿真钻耳环', '400', '1118', '2018-12-25 19:58:25');
INSERT INTO `goods` VALUES ('17', 'images/goodlist/earring9.jpg', '粉红微镶仿真钻耳环', '400', '1118', '2018-12-25 19:58:26');
INSERT INTO `goods` VALUES ('18', 'images/goodlist/earring10.jpg', '粉红微镶仿真钻耳环', '400', '1118', '2018-12-25 19:58:29');
INSERT INTO `goods` VALUES ('19', 'images/goodlist/necklace1.jpg', 'S925纯银蝴蝶叠带吊坠项链', '700', '567', '2018-12-26 09:15:48');
INSERT INTO `goods` VALUES ('20', 'images/goodlist/necklace2.jpg', 'S925纯银蝴蝶叠带吊坠项链', '700', '567', '2018-12-26 09:15:55');
INSERT INTO `goods` VALUES ('21', 'images/goodlist/necklace3.jpg', 'S925纯银蝴蝶叠带吊坠项链', '700', '567', '2018-12-26 09:15:59');
INSERT INTO `goods` VALUES ('22', 'images/goodlist/necklace4.jpg', 'S925纯银蝴蝶叠带吊坠项链', '700', '567', '2018-12-26 09:16:03');
INSERT INTO `goods` VALUES ('23', 'images/goodlist/necklace5.jpg', 'S925纯银蝴蝶叠带吊坠项链', '700', '567', '2018-12-26 09:16:07');
INSERT INTO `goods` VALUES ('24', 'images/goodlist/necklace6.jpg', 'S925纯银蝴蝶叠带吊坠项链', '700', '567', '2018-12-26 09:16:10');
INSERT INTO `goods` VALUES ('25', 'images/goodlist/necklace7.jpg', 'S925纯银蝴蝶叠带吊坠项链', '700', '567', '2018-12-26 09:16:16');
INSERT INTO `goods` VALUES ('26', 'images/goodlist/necklace.jpg', 'S925纯银蝴蝶叠带吊坠项链', '700', '567', '2018-12-26 09:16:24');
INSERT INTO `goods` VALUES ('27', 'images/goodlist/ring.jpg', '爱的花瓣心形戒指', '350', '777', '2018-12-25 19:55:51');
INSERT INTO `goods` VALUES ('28', 'images/goodlist/ring2.jpg', '爱的花瓣心形戒指', '350', '777', '2018-12-25 19:56:51');
INSERT INTO `goods` VALUES ('29', 'images/goodlist/ring3.jpg', '爱的花瓣心形戒指', '350', '777', '2018-12-25 19:56:55');
INSERT INTO `goods` VALUES ('30', 'images/goodlist/ring5.png', '爱的花瓣心形戒指', '350', '777', '2018-12-26 08:58:04');
INSERT INTO `goods` VALUES ('31', 'images/goodlist/ring5.png', '爱的花瓣心形戒指', '350', '777', '2018-12-26 08:58:10');
INSERT INTO `goods` VALUES ('32', 'images/goodlist/ring6.jpg', '爱的花瓣心形戒指', '350', '777', '2018-12-25 19:57:11');
INSERT INTO `goods` VALUES ('33', 'images/goodlist/ring7.jpg', '爱的花瓣心形戒指', '350', '777', '2018-12-25 19:57:20');
INSERT INTO `goods` VALUES ('34', 'images/goodlist/ring8.jpg', '爱的花瓣心形戒指', '350', '777', '2018-12-25 19:57:42');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `tel` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `settime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('3', '13414111654', '123', '2018-12-24 15:41:57');
INSERT INTO `user` VALUES ('5', '13640331133', '999', '2018-12-29 12:46:32');
SET FOREIGN_KEY_CHECKS=1;

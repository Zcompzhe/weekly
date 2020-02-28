//获取工序级联选择器
export const getWorkProcess = () => {
  return [
    {
      value: "01",
      label: "公共部分",
      children: [
        {
          value: "0101",
          label: "施工用电",
          children: [
            {
              value: "010101",
              label: "施工用电布设",
              children: [
                {
                  value: "01010101",
                  label: "架空线路架设及直埋电缆敷设",
                  riskLevel: 2
                },
                {
                  value: "01010102",
                  label: "配电箱及开关箱安装",
                  riskLevel: 2
                },
                {
                  value: "01010103",
                  label: "现场临时施工用电布设",
                  riskLevel: 2
                },
                {
                  value: "01010104",
                  label: "保护接地或接零",
                  riskLevel: 2
                },
                {
                  value: "01010105",
                  label: "总配电箱接火",
                  riskLevel: 3
                },
                {
                  value: "01010106",
                  label: "发电机的使用和管理",
                  riskLevel: 2
                }
              ]
            }
          ]
        }
      ]
    },
    {
      value: "02",
      label: "变电站土建工程",
      children: [
        {
          value: "0201",
          label: "变电站桩基础施工",
          children: [
            {
              value: "020101",
              label: "人工挖孔灌注桩施工",
              children: [
                {
                  value: "02010101",
                  label: "深度5m 以内循环作业",
                  riskLevel: 2
                },
                {
                  value: "02010102",
                  label: "深度5m至15m逐层往下循环作业",
                  riskLevel: 3
                },
                {
                  value: "02010103",
                  label: "深度15m及以下逐层往下循环作业",
                  riskLevel: 4
                },
                {
                  value: "02010104",
                  label: "钢筋笼制作与吊放",
                  riskLevel: 2
                },
                {
                  value: "02010105",
                  label: "混凝土浇筑",
                  riskLevel: 1
                }
              ]
            },
            {
              value: "020102",
              label: "机械冲、钻孔灌注桩施工",
              children: [
                {
                  value: "02010201",
                  label: "埋设护筒",
                  riskLevel: 2
                },
                {
                  value: "02010202",
                  label: "桩机就位和钻进操作",
                  riskLevel: 2
                },
                {
                  value: "02010203",
                  label: "冲孔操作和清孔及换浆",
                  riskLevel: 2
                },
                {
                  value: "02010204",
                  label: "钢筋笼制作与吊放",
                  riskLevel: 2
                },
                {
                  value: "02010205",
                  label: "导管安装与下放及混凝土灌注",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "020103",
              label: "预制桩施工",
              children: [
                {
                  value: "02010301",
                  label: "桩机进场安装",
                  riskLevel: 2
                },
                {
                  value: "02010302",
                  label: "桩基施工",
                  riskLevel: 2
                },
                {
                  value: "02010303",
                  label: "桩基连接与焊接",
                  riskLevel: 1
                },
                {
                  value: "02010304",
                  label: "桩机拆卸",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "020104",
              label: "高压旋喷桩施工",
              children: [
                {
                  value: "02010401",
                  label: "桩机就位和钻进成孔",
                  riskLevel: 2
                },
                {
                  value: "02010402",
                  label: "旋喷注浆和提升拔管",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "020105",
              label: "水泥搅拌桩",
              children: [
                {
                  value: "02010501",
                  label: "桩机就位",
                  riskLevel: 1
                },
                {
                  value: "02010502",
                  label: "桩基施工",
                  riskLevel: 2
                },
                {
                  value: "02010503",
                  label: "桩机拆卸",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "020106",
              label: "地基强夯施工",
              children: [
                {
                  value: "02010601",
                  label: "地基强夯",
                  riskLevel: 3
                }
              ]
            }
          ]
        },
        {
          value: "0202",
          label: "变电站混凝土基础工程",
          children: [
            {
              value: "020201",
              label:
                "土方开挖（建筑物、防火墙工程、事故油池、消防水池参照执行）",
              children: [
                {
                  value: "02020101",
                  label: "开挖深度在1m到3m之间的基坑挖土",
                  riskLevel: 1
                },
                {
                  value: "02020102",
                  label: "开挖深度在3m到5m之间的基坑挖土",
                  riskLevel: 2
                },
                {
                  value: "02020103",
                  label:
                    "深度超过5m（含5m）的深基坑挖土或未超过5m，但地质条件与周边环境复杂",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "020202",
              label: "模板工程",
              children: [
                {
                  value: "02020201",
                  label: "组模",
                  riskLevel: 1
                },
                {
                  value: "02020202",
                  label: "模板运输及拼装",
                  riskLevel: 1
                },
                {
                  value: "02020203",
                  label: "模板拆除",
                  riskLevel: 1
                }
              ]
            },
            {
              value: "020203",
              label: "钢筋工程",
              children: [
                {
                  value: "02020301",
                  label: "钢筋加工",
                  riskLevel: 1
                },
                {
                  value: "02020302",
                  label: "钢筋安装",
                  riskLevel: 1
                }
              ]
            },
            {
              value: "020204",
              label: "混凝土工程",
              children: [
                {
                  value: "02020401",
                  label: "混凝土搅拌",
                  riskLevel: 1
                },
                {
                  value: "02020402",
                  label: "混凝土浇筑",
                  riskLevel: 1
                },
                {
                  value: "02020403",
                  label: "混凝土砂浆搅拌机使用",
                  riskLevel: 1
                }
              ]
            }
          ]
        },
        {
          value: "0203",
          label:
            "变电站主建筑物工程（防火墙工程、事故油池、消防水池等参照执行）",
          children: [
            {
              value: "020301",
              label: "钢筋工程",
              children: [
                {
                  value: "02030101",
                  label: "钢筋加工",
                  riskLevel: 1
                },
                {
                  value: "02030102",
                  label: "钢筋搬运作业",
                  riskLevel: 2
                },
                {
                  value: "02030103",
                  label: "钢筋安装",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "020302",
              label: "模板工程",
              children: [
                {
                  value: "02030201",
                  label: "模板安装",
                  riskLevel: 3
                },
                {
                  value: "02030202",
                  label: "模板拆除",
                  riskLevel: 3
                },
                {
                  value: "02030203",
                  label: "高度超过8m或跨度超过18m的模板支撑系统",
                  riskLevel: 4
                }
              ]
            },
            {
              value: "020303",
              label: "混凝土工程",
              children: [
                {
                  value: "02030301",
                  label: "混凝土作业",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "020304",
              label: "砌筑工程",
              children: [
                {
                  value: "02030401",
                  label: "主体填充墙砌筑",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "020305",
              label: "屋面工程",
              children: [
                {
                  value: "02030501",
                  label: "屋面施工",
                  riskLevel: 1
                }
              ]
            },
            {
              value: "020306",
              label: "抹灰工程",
              children: [
                {
                  value: "02030601",
                  label: "抹灰施工",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "020307",
              label: "涂料工程",
              children: [
                {
                  value: "02030701",
                  label: "涂料施工",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "020308",
              label: "装饰装修工程",
              children: [
                {
                  value: "02030801",
                  label: "装饰装修作业",
                  riskLevel: 1
                }
              ]
            },
            {
              value: "020309",
              label: "水电工程",
              children: [
                {
                  value: "02030901",
                  label: "给排水系统作业",
                  riskLevel: 2
                },
                {
                  value: "02030902",
                  label: "建筑电气施工",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "020310",
              label: "暖通工程",
              children: [
                {
                  value: "02031001",
                  label: "通风系统施工",
                  riskLevel: 2
                },
                {
                  value: "02031002",
                  label: "采暖、制冷系统施工",
                  riskLevel: 2
                }
              ]
            }
          ]
        },
        {
          value: "0204",
          label: "装配式混凝土构件",
          children: [
            {
              value: "020401",
              label: "装配式防火墙施工",
              children: [
                {
                  value: "02040101",
                  label: "预制构件进场",
                  riskLevel: 1
                },
                {
                  value: "02040102",
                  label: "防火墙柱、梁施工",
                  riskLevel: 2
                },
                {
                  value: "02040103",
                  label: "墙板施工",
                  riskLevel: 2
                },
                {
                  value: "02040104",
                  label: "墙体装饰",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "020402",
              label: "装配式围墙施工",
              children: [
                {
                  value: "02040201",
                  label: "预制构件进场",
                  riskLevel: 1
                },
                {
                  value: "02040202",
                  label: "围墙柱安装",
                  riskLevel: 2
                },
                {
                  value: "02040203",
                  label: "围墙板安装",
                  riskLevel: 2
                }
              ]
            }
          ]
        },
        {
          value: "0205",
          label: "变电站构支架安装工程",
          children: [
            {
              value: "020501",
              label: "吊装（通用于起重机吊装相关作业）",
              children: [
                {
                  value: "02050101",
                  label: "一般起重吊装",
                  riskLevel: 2
                },
                {
                  value: "02050102",
                  label: "两台及以上起重机抬吊同一重物",
                  riskLevel: 3
                },
                {
                  value: "02050103",
                  label: "起重机械临近带电体作业",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "020502",
              label: "钢管、水泥杆构支架组立",
              children: [
                {
                  value: "02050201",
                  label: "排杆",
                  riskLevel: 1
                },
                {
                  value: "02050202",
                  label: "电焊机焊接",
                  riskLevel: 1
                },
                {
                  value: "02050203",
                  label: "气焊机焊接",
                  riskLevel: 1
                },
                {
                  value: "02050204",
                  label: "横梁组装",
                  riskLevel: 1
                },
                {
                  value: "02050205",
                  label: "A型构架的吊装",
                  riskLevel: 3
                },
                {
                  value: "02050206",
                  label: "横梁吊装",
                  riskLevel: 3
                },
                {
                  value: "02050207",
                  label: "构支架、避雷针吊装及接地",
                  riskLevel: 1
                },
                {
                  value: "02050208",
                  label: "格构式构支架组立",
                  riskLevel: 3
                }
              ]
            }
          ]
        },
        {
          value: "0206",
          label: "变电站电缆沟道工程",
          children: [
            {
              value: "020601",
              label: "预制电缆槽施工",
              children: [
                {
                  value: "02060101",
                  label: "电缆沟预制盖板外框制作",
                  riskLevel: 1
                },
                {
                  value: "02060102",
                  label: "预制构件混凝土浇筑",
                  riskLevel: 1
                },
                {
                  value: "02060103",
                  label: "预制构件运输、堆放、安装",
                  riskLevel: 1
                }
              ]
            },
            {
              value: "020602",
              label: "现浇式电缆沟施工",
              children: [
                {
                  value: "02060201",
                  label: "电缆沟挖方",
                  riskLevel: 1
                },
                {
                  value: "02060202",
                  label: "电缆沟垫层施工",
                  riskLevel: 1
                },
                {
                  value: "02060203",
                  label: "钢筋加工及绑扎",
                  riskLevel: 1
                },
                {
                  value: "02060204",
                  label: "模板安装及拆除",
                  riskLevel: 1
                },
                {
                  value: "02060205",
                  label: "混凝土浇筑",
                  riskLevel: 1
                }
              ]
            }
          ]
        },
        {
          value: "0207",
          label: "变电站接地工程",
          children: [
            {
              value: "020701",
              label: "接地网施工",
              children: [
                {
                  value: "02070101",
                  label: "人工开挖接地网沟",
                  riskLevel: 1
                },
                {
                  value: "02070102",
                  label: "机械开挖接地网沟",
                  riskLevel: 1
                },
                {
                  value: "02070103",
                  label: "接地网敷设",
                  riskLevel: 1
                }
              ]
            }
          ]
        },
        {
          value: "0208",
          label: "变电站站区道路工程及围墙工程",
          children: [
            {
              value: "020801",
              label: "站区四通一平、站区道路工程",
              children: [
                {
                  value: "02080101",
                  label: "场地平整",
                  riskLevel: 2
                },
                {
                  value: "02080102",
                  label: "高度＜8m的挡土墙施工",
                  riskLevel: 2
                },
                {
                  value: "02080103",
                  label: "高度≥8m的挡土墙施工",
                  riskLevel: 3
                },
                {
                  value: "02080104",
                  label: "边坡及护坡",
                  riskLevel: 2
                },
                {
                  value: "02080105",
                  label:
                    "高边坡（土质边坡高度大于10m、小于100m或岩质边坡高度大于15m、小于100m的边坡）",
                  riskLevel: 3
                },
                {
                  value: "02080106",
                  label: "土石方爆破",
                  riskLevel: 4
                },
                {
                  value: "02080107",
                  label: "路槽开挖、路基填压施工",
                  riskLevel: 1
                },
                {
                  value: "02080108",
                  label: "路面施工",
                  riskLevel: 1
                }
              ]
            },
            {
              value: "020802",
              label: "围墙工程",
              children: [
                {
                  value: "02080201",
                  label: "基础工程施工",
                  riskLevel: 1
                },
                {
                  value: "02080202",
                  label: "墙体砌筑",
                  riskLevel: 1
                },
                {
                  value: "02080203",
                  label: "墙体抹灰及装饰",
                  riskLevel: 1
                },
                {
                  value: "02080204",
                  label: "格栅式围墙施工",
                  riskLevel: 1
                }
              ]
            }
          ]
        },
        {
          value: "0209",
          label: "变电站消防工程",
          children: [
            {
              value: "020901",
              label: "消防管道管网施工",
              children: [
                {
                  value: "02090101",
                  label: "管道的土方开挖",
                  riskLevel: 1
                },
                {
                  value: "02090102",
                  label: "管道的下料、敷设、连接和支架安装",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "020902",
              label: "消防设备和控制设备安装",
              children: [
                {
                  value: "02090201",
                  label: "消防设备，消防控制设备的安装，热敏电缆敷设",
                  riskLevel: 1
                }
              ]
            },
            {
              value: "020903",
              label: "报警与消防水系统联合调试",
              children: [
                {
                  value: "02090301",
                  label: "火灾报警系统单体调试",
                  riskLevel: 1
                },
                {
                  value: "02090302",
                  label: "消防系统的联合调试",
                  riskLevel: 1
                }
              ]
            }
          ]
        },
        {
          value: "0210",
          label: "地下变电站土建施工",
          children: [
            {
              value: "021001",
              label: "地下变电站基坑围护结构施工",
              children: [
                {
                  value: "02100101",
                  label: "钢筋笼吊装",
                  riskLevel: 2
                },
                {
                  value: "02100102",
                  label: "混凝土支撑",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "021002",
              label: "地下变深基坑开挖",
              children: [
                {
                  value: "02100201",
                  label: "基坑开挖",
                  riskLevel: 3
                },
                {
                  value: "02100202",
                  label: "基坑排水",
                  riskLevel: 2
                },
                {
                  value: "02100203",
                  label: "基坑工程监测",
                  riskLevel: 2
                },
                {
                  value: "02100204",
                  label: "基坑垂直作业",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "021003",
              label: "地下变主体结构施工",
              children: [
                {
                  value: "02100301",
                  label: "高大模板支撑系统施工",
                  riskLevel: 3
                },
                {
                  value: "02100302",
                  label: "钢支撑安装",
                  riskLevel: 3
                },
                {
                  value: "02100303",
                  label: "钢支撑拆除",
                  riskLevel: 3
                },
                {
                  value: "02100304",
                  label: "基坑钢筋混凝土支撑爆破",
                  riskLevel: 4
                },
                {
                  value: "02100305",
                  label: "基坑钢筋混凝土支撑切割",
                  riskLevel: 3
                },
                {
                  value: "02100306",
                  label: "逆做法施工",
                  riskLevel: 3
                }
              ]
            }
          ]
        },
        {
          value: "0211",
          label: "钢结构及相关施工",
          children: [
            {
              value: "021101",
              label: "钢结构彩板安装",
              children: [
                {
                  value: "02110101",
                  label: "彩板压制",
                  riskLevel: 2
                },
                {
                  value: "02110102",
                  label: "彩板安装",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "021102",
              label: "钢结构安装",
              children: [
                {
                  value: "02110201",
                  label: "钢结构吊装",
                  riskLevel: 3
                },
                {
                  value: "02110202",
                  label: "装配式厂房安装",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "021103",
              label: "隔音降躁装置安装",
              children: [
                {
                  value: "02110301",
                  label: "围墙上隔音降噪装置安装",
                  riskLevel: 2
                },
                {
                  value: "02110302",
                  label: "换流变压器隔音降噪装置安装",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "021104",
              label: "钢结构建筑物接地施工",
              children: [
                {
                  value: "02110401",
                  label: "接地装置施工",
                  riskLevel: 1
                }
              ]
            }
          ]
        },
        {
          value: "0212",
          label: "直流换流站专属工程",
          children: [
            {
              value: "021201",
              label: "水池及盐池施工",
              children: [
                {
                  value: "02120101",
                  label: "开挖深度在3m到5m之间的基坑挖土",
                  riskLevel: 2
                },
                {
                  value: "02120102",
                  label:
                    "深度超过5m（含5m）的深基坑挖土或未超过5m，但地质条件与周边环境复杂",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "021202",
              label: "换流变广场及轨道广场施工",
              children: [
                {
                  value: "02120201",
                  label: "轨道加工、运输和安装",
                  riskLevel: 1
                }
              ]
            },
            {
              value: "021203",
              label: "阀厅钢结构吊装",
              children: [
                {
                  value: "02120301",
                  label: "阀厅钢柱吊装",
                  riskLevel: 3
                },
                {
                  value: "02120302",
                  label: "阀厅钢屋架整体吊装",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "021204",
              label: "防火墙大面积（超长、超高）钢模板安装",
              children: [
                {
                  value: "02120401",
                  label: "站内二次运输",
                  riskLevel: 1
                },
                {
                  value: "02120402",
                  label: "安装作业平台搭设",
                  riskLevel: 2
                },
                {
                  value: "02120403",
                  label: "安装作业",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "021205",
              label: "阀厅建筑物接地施工",
              children: [
                {
                  value: "02120501",
                  label: "接地施工",
                  riskLevel: 1
                },
                {
                  value: "02120502",
                  label: "焊接",
                  riskLevel: 1
                }
              ]
            },
            {
              value: "021206",
              label: "阀厅通风空调设备安装",
              children: [
                {
                  value: "02120601",
                  label: "阀厅通风系统安装",
                  riskLevel: 2
                },
                {
                  value: "02120602",
                  label: "空调设备安装",
                  riskLevel: 2
                },
                {
                  value: "02120603",
                  label: "空调系统的联合调试",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "021207",
              label: "阀厅辅助设备安装调试工程（包括火灾报警、照明等）",
              children: [
                {
                  value: "02120701",
                  label: "火灾探测器、控制模块、照明灯具安装",
                  riskLevel: 2
                },
                {
                  value: "02120702",
                  label: "系统调试及联动试验",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "021208",
              label: "接地极工程",
              children: [
                {
                  value: "02120801",
                  label: "内外环基坑土方开挖深度在1 m到 3m之间的基坑挖土",
                  riskLevel: 1
                },
                {
                  value: "02120802",
                  label:
                    "内外环基坑土方开挖深度在3 m到 5m之间的基坑挖土（含3m）",
                  riskLevel: 2
                },
                {
                  value: "02120803",
                  label:
                    "内外环基坑土方开挖深度超过 5 m（含 5 m）的深基坑挖土或未超过5 m，但地质条件与周边环境复杂",
                  riskLevel: 3
                },
                {
                  value: "02120804",
                  label: "活性填充材料铺设",
                  riskLevel: 2
                },
                {
                  value: "02120805",
                  label: "馈电元件敷设",
                  riskLevel: 1
                },
                {
                  value: "02120806",
                  label: "馈电元件放热焊接",
                  riskLevel: 1
                },
                {
                  value: "02120807",
                  label: "电缆运输",
                  riskLevel: 1
                },
                {
                  value: "02120808",
                  label: "电缆敷设",
                  riskLevel: 2
                },
                {
                  value: "02120809",
                  label: "滤水层铺设",
                  riskLevel: 2
                }
              ]
            }
          ]
        },
        {
          value: "0213",
          label: "钢管脚手架工程",
          children: [
            {
              value: "021301",
              label: "钢管脚手架搭设",
              children: [
                {
                  value: "02130101",
                  label: "脚手架构件检查",
                  riskLevel: 1
                },
                {
                  value: "02130102",
                  label: "铺垫板安装",
                  riskLevel: 1
                },
                {
                  value: "02130103",
                  label: "纵横向扫地杆安装",
                  riskLevel: 1
                },
                {
                  value: "02130104",
                  label: "竖立杆安装",
                  riskLevel: 1
                },
                {
                  value: "02130105",
                  label: "纵向水平杆安装",
                  riskLevel: 1
                },
                {
                  value: "02130106",
                  label: "横向水平杆安装",
                  riskLevel: 1
                },
                {
                  value: "02130107",
                  label: "搭上层脚手架安装",
                  riskLevel: 1
                },
                {
                  value: "02130108",
                  label: "连墙件安装",
                  riskLevel: 1
                },
                {
                  value: "02130109",
                  label: "剪刀撑安装",
                  riskLevel: 1
                },
                {
                  value: "02130110",
                  label: "脚手板安装",
                  riskLevel: 1
                },
                {
                  value: "02130111",
                  label: "人行、材料运输斜道安装",
                  riskLevel: 1
                },
                {
                  value: "02130112",
                  label: "安全通道安装",
                  riskLevel: 1
                },
                {
                  value: "02130113",
                  label: "临边防护安装",
                  riskLevel: 1
                },
                {
                  value: "02130114",
                  label:
                    "搭设高度不超过24m的落地式双排钢管扣件脚手架、碗扣式脚手架、盘扣式脚手架",
                  riskLevel: 3
                },
                {
                  value: "02130115",
                  label:
                    "搭设高度超过24m的落地式双排钢管扣件脚手架、碗扣式脚手架、盘扣式脚手架",
                  riskLevel: 4
                },
                {
                  value: "02130116",
                  label: "架体高度20m以下悬挑式脚手架工程",
                  riskLevel: 3
                },
                {
                  value: "02130117",
                  label: "架体高度20m及以上悬挑式脚手架工程",
                  riskLevel: 4
                },
                {
                  value: "02130118",
                  label: "吊篮脚手架",
                  riskLevel: 3
                },
                {
                  value: "02130119",
                  label: "卸料平台",
                  riskLevel: 3
                },
                {
                  value: "02130120",
                  label: "落地钢管扣件式满堂支撑架搭设",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "021302",
              label: "脚手架的验收与维护",
              children: [
                {
                  value: "02130201",
                  label: "脚手架的验收与维护",
                  riskLevel: 1
                }
              ]
            },
            {
              value: "021303",
              label: "脚手架拆除",
              children: [
                {
                  value: "02130301",
                  label: "拆除落地钢管扣件式满堂支撑架",
                  riskLevel: 3
                },
                {
                  value: "02130302",
                  label: "脚手架拆除作业",
                  riskLevel: 3
                }
              ]
            }
          ]
        }
      ]
    },
    {
      value: "03",
      label: "变电站电气工程",
      children: [
        {
          value: "0301",
          label: "变电站变压器、电抗器安装",
          children: [
            {
              value: "030101",
              label: "油浸电力变压器、油浸电抗器施工作业",
              children: [
                {
                  value: "03010101",
                  label: "变压器进场",
                  riskLevel: 3
                },
                {
                  value: "03010102",
                  label: "吊罩检查",
                  riskLevel: 3
                },
                {
                  value: "03010103",
                  label: "不吊罩检查",
                  riskLevel: 2
                },
                {
                  value: "03010104",
                  label: "附件安装",
                  riskLevel: 2
                },
                {
                  value: "03010105",
                  label: "套管安装",
                  riskLevel: 3
                },
                {
                  value: "03010106",
                  label: "油务处理、抽真空、注油及热油循环",
                  riskLevel: 2
                }
              ]
            }
          ]
        },
        {
          value: "0302",
          label: "变电站一次设备安装",
          children: [
            {
              value: "030201",
              label: "管型母线安装",
              children: [
                {
                  value: "03020101",
                  label: "管母线加工",
                  riskLevel: 2
                },
                {
                  value: "03020102",
                  label: "管母线焊接",
                  riskLevel: 2
                },
                {
                  value: "03020103",
                  label: "支撑式安装",
                  riskLevel: 3
                },
                {
                  value: "03020104",
                  label: "悬吊式安装",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "030202",
              label: "软母线安装",
              children: [
                {
                  value: "03020201",
                  label: "档距测量及下料",
                  riskLevel: 2
                },
                {
                  value: "03020202",
                  label: "压接",
                  riskLevel: 2
                },
                {
                  value: "03020203",
                  label: "母线安装",
                  riskLevel: 3
                },
                {
                  value: "03020204",
                  label: "母线跳线及设备引下线安装",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "030203",
              label: "断路器安装",
              children: [
                {
                  value: "03020301",
                  label: "搬运与开箱",
                  riskLevel: 2
                },
                {
                  value: "03020302",
                  label: "本体及套管安装",
                  riskLevel: 2
                },
                {
                  value: "03020303",
                  label: "充SF6气体",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "030204",
              label: "隔离开关安装与调整",
              children: [
                {
                  value: "03020401",
                  label: "本体安装",
                  riskLevel: 2
                },
                {
                  value: "03020402",
                  label: "静触头安装",
                  riskLevel: 2
                },
                {
                  value: "03020403",
                  label: "机构箱安装及隔离开关调整",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "030205",
              label: "其他户外设备安装",
              children: [
                {
                  value: "03020501",
                  label: "二次运输",
                  riskLevel: 2
                },
                {
                  value: "03020502",
                  label: "互感器、耦合电容器、避雷器安装",
                  riskLevel: 2
                },
                {
                  value: "03020503",
                  label: "干式电抗器安装",
                  riskLevel: 2
                },
                {
                  value: "03020504",
                  label: "悬挂式阻波器安装",
                  riskLevel: 2
                },
                {
                  value: "03020505",
                  label: "座式阻波器安装",
                  riskLevel: 2
                },
                {
                  value: "03020506",
                  label: "站用变、消弧线圈、二次设备仓安装",
                  riskLevel: 2
                },
                {
                  value: "03020507",
                  label: "其它设备安装",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "030206",
              label: "母线桥施工作业",
              children: [
                {
                  value: "03020601",
                  label: "支吊架、支持绝缘子及金具检查安装",
                  riskLevel: 2
                },
                {
                  value: "03020602",
                  label: "母线加工",
                  riskLevel: 2
                },
                {
                  value: "03020603",
                  label: "母线安装",
                  riskLevel: 2
                }
              ]
            }
          ]
        },
        {
          value: "0303",
          label: "变电站GIS组合电器安装",
          children: [
            {
              value: "030301",
              label: "GIS组合电器安装",
              children: [
                {
                  value: "03030101",
                  label: "户内GIS就位",
                  riskLevel: 2
                },
                {
                  value: "03030102",
                  label: "户外GIS就位",
                  riskLevel: 2
                },
                {
                  value: "03030103",
                  label: "户内GIS母线及母线筒对接",
                  riskLevel: 2
                },
                {
                  value: "03030104",
                  label: "户外GIS母线及母线筒对接",
                  riskLevel: 2
                },
                {
                  value: "03030105",
                  label: "GIS套管安装",
                  riskLevel: 3
                },
                {
                  value: "03030106",
                  label: "抽真空、充气",
                  riskLevel: 2
                }
              ]
            }
          ]
        },
        {
          value: "0304",
          label: "变电站二次系统",
          children: [
            {
              value: "030401",
              label: "开关柜、屏安装",
              children: [
                {
                  value: "03040101",
                  label: "二次搬运及开箱",
                  riskLevel: 2
                },
                {
                  value: "03040102",
                  label: "屏、柜就位",
                  riskLevel: 2
                },
                {
                  value: "03040103",
                  label: "蓄电池安装及充放电",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "030402",
              label: "电缆敷设及二次接线",
              children: [
                {
                  value: "03040201",
                  label: "电缆敷设作业准备及装卸",
                  riskLevel: 2
                },
                {
                  value: "03040202",
                  label: "敷设及接线",
                  riskLevel: 2
                },
                {
                  value: "03040203",
                  label: "110kV及以上高压电缆敷设",
                  riskLevel: 2
                },
                {
                  value: "03040204",
                  label: "110kV及以上高压电缆头制作",
                  riskLevel: 1
                }
              ]
            }
          ]
        },
        {
          value: "0305",
          label: "变电站改扩建工程",
          children: [
            {
              value: "030501",
              label: "改扩建施工",
              children: [
                {
                  value: "03050101",
                  label: "材料、设备搬运、绿化、地面卫生清扫",
                  riskLevel: 2
                },
                {
                  value: "03050102",
                  label: "土建间隔扩建施工",
                  riskLevel: 3
                },
                {
                  value: "03050103",
                  label: "一次电气设备安装",
                  riskLevel: 3
                },
                {
                  value: "03050104",
                  label: "二次电气设备安装",
                  riskLevel: 3
                },
                {
                  value: "03050105",
                  label: "运行屏柜上二次接线",
                  riskLevel: 3
                },
                {
                  value: "03050106",
                  label: "二次接入带电系统",
                  riskLevel: 3
                },
                {
                  value: "03050107",
                  label: "附属设备安装",
                  riskLevel: 3
                }
              ]
            }
          ]
        },
        {
          value: "0306",
          label: "地下变电站电气安装",
          children: [
            {
              value: "030601",
              label: "设备安装",
              children: [
                {
                  value: "03060101",
                  label: "一般设备安装",
                  riskLevel: 3
                },
                {
                  value: "03060102",
                  label: "大型设备（30t及以上）安装",
                  riskLevel: 4
                },
                {
                  value: "03060103",
                  label: "地下变SF6气体充装",
                  riskLevel: 1
                }
              ]
            }
          ]
        },
        {
          value: "0307",
          label: "换流站电气安装",
          children: [
            {
              value: "030701",
              label: "换流变安装",
              children: [
                {
                  value: "03070101",
                  label: "器身内部检查",
                  riskLevel: 3
                },
                {
                  value: "03070102",
                  label: "油枕、散热器等附件安装",
                  riskLevel: 2
                },
                {
                  value: "03070103",
                  label: "套管安装",
                  riskLevel: 3
                },
                {
                  value: "03070104",
                  label: "牵引就位",
                  riskLevel: 3
                },
                {
                  value: "03070105",
                  label: "抽真空及真空注油、热油循环",
                  riskLevel: 2
                },
                {
                  value: "03070106",
                  label: "降噪设施安装",
                  riskLevel: 3
                },
                {
                  value: "03070107",
                  label:
                    "换流变压器在低端运行运情况下高端安装（简称“低运高建”）",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "030702",
              label: "换流阀安装",
              children: [
                {
                  value: "03070201",
                  label: "阀塔支架安装",
                  riskLevel: 2
                },
                {
                  value: "03070202",
                  label: "阀组模块安装",
                  riskLevel: 2
                },
                {
                  value: "03070203",
                  label: "阀避雷器安装",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "030703",
              label: "换流阀冷却设备安装",
              children: [
                {
                  value: "03070301",
                  label: "设备安装",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "030704",
              label: "平波电抗器安装",
              children: [
                {
                  value: "03070401",
                  label: "绝缘支架安装",
                  riskLevel: 2
                },
                {
                  value: "03070402",
                  label: "平波电抗器主体安装",
                  riskLevel: 3
                },
                {
                  value: "03070403",
                  label: "电抗器引线安装",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "030705",
              label: "直流穿墙套管安装",
              children: [
                {
                  value: "03070501",
                  label: "穿墙套管安装",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "030706",
              label: "直流场设备安装",
              children: [
                {
                  value: "03070601",
                  label: "设备安装",
                  riskLevel: 2
                }
              ]
            }
          ]
        },
        {
          value: "0308",
          label: "变电站工程电气调试",
          children: [
            {
              value: "030801",
              label: "电气调试试验",
              children: [
                {
                  value: "03080101",
                  label: "一次电气设备交接试验",
                  riskLevel: 2
                },
                {
                  value: "03080102",
                  label: "二次设备调试",
                  riskLevel: 1
                },
                {
                  value: "03080103",
                  label: "一次设备耐压试验",
                  riskLevel: 3
                },
                {
                  value: "03080104",
                  label: "油浸电力变压器局放及耐压试验",
                  riskLevel: 3
                },
                {
                  value: "03080105",
                  label: "高压电缆耐压试验",
                  riskLevel: 3
                },
                {
                  value: "03080106",
                  label: "换流站阀厅内试验",
                  riskLevel: 3
                },
                {
                  value: "03080107",
                  label: "改扩建工程一次设备试验",
                  riskLevel: 3
                },
                {
                  value: "03080108",
                  label: "改扩建工程二次设备试验",
                  riskLevel: 2
                },
                {
                  value: "03080109",
                  label: "系统稳定控制、系统联调试验",
                  riskLevel: 3
                }
              ]
            }
          ]
        },
        {
          value: "0309",
          label: "投产送电",
          children: [
            {
              value: "030901",
              label: "验收及设备检查",
              children: [
                {
                  value: "03090101",
                  label: "变电站验收、消缺作业",
                  riskLevel: 2
                },
                {
                  value: "03090102",
                  label: "设备检查",
                  riskLevel: 2
                },
                {
                  value: "03090103",
                  label: "继电保护装置向量测试",
                  riskLevel: 2
                }
              ]
            }
          ]
        }
      ]
    },
    {
      value: "04",
      label: " 架空线路工程",
      children: [
        {
          value: "0401",
          label: " 项目驻地建设",
          children: [
            {
              value: "040101",
              label: " 驻地临建",
              children: [
                {
                  value: "04010101",
                  label: "临建搭拆",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "040102",
              label: " 医疗保障和高原生活安全",
              children: [
                {
                  value: "04010201",
                  label: "高海拔地区施工后勤保障",
                  riskLevel: 3
                },
                {
                  value: "04010202",
                  label: "进入高海拔地区施工",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "040103",
              label: " 高原性疾病防治",
              children: [
                {
                  value: "04010301",
                  label:
                    "高原强紫外线照射、寒冷气候伤害以及雨雪、冰雹等气候伤害",
                  riskLevel: 1
                },
                {
                  value: "04010302",
                  label: "日常巡诊及医疗药品设备配备",
                  riskLevel: 2
                }
              ]
            }
          ]
        },
        {
          value: "0402",
          label: " 架空线路复测",
          children: [
            {
              value: "04020001",
              label: "山区及森林作业、通道清理",
              riskLevel: 2
            },
            {
              value: "04020002",
              label: "复杂地形作业",
              riskLevel: 2
            }
          ]
        },
        {
          value: "0403",
          label: " 土石方工程",
          children: [
            {
              value: "040301",
              label: " 一般土石方开挖",
              children: [
                {
                  value: "04030101",
                  label: "深度小于5m人工开挖",
                  riskLevel: 2
                },
                {
                  value: "04030102",
                  label: "深度大于等于5m深基坑人工开挖",
                  riskLevel: 3
                },
                {
                  value: "04030103",
                  label: "机械开挖",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "040302",
              label: "掏挖基础基坑开挖",
              children: [
                {
                  value: "04030201",
                  label: "深度小于等于5m的人工开挖",
                  riskLevel: 2
                },
                {
                  value: "04030202",
                  label: "深度大于5m的人工开挖",
                  riskLevel: 3
                },
                {
                  value: "04030203",
                  label: "底盘扩底基坑清理",
                  riskLevel: 3
                },
                {
                  value: "04030204",
                  label: "机械开挖",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "040303",
              label: "岩石基坑开挖",
              children: [
                {
                  value: "04030301",
                  label: "人工成孔",
                  riskLevel: 3
                },
                {
                  value: "04030302",
                  label: "机械钻孔",
                  riskLevel: 2
                },
                {
                  value: "04030303",
                  label: "爆破作业",
                  riskLevel: 4
                }
              ]
            },
            {
              value: "040304",
              label: "特殊基坑开挖作业",
              children: [
                {
                  value: "04030401",
                  label: "泥沙流沙坑开挖",
                  riskLevel: 3
                },
                {
                  value: "04030402",
                  label: "水坑、沼泽地基坑开挖",
                  riskLevel: 2
                },
                {
                  value: "04030403",
                  label: "冻土基坑开挖",
                  riskLevel: 2
                },
                {
                  value: "04030404",
                  label: "大坎、高边坡基础开挖",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "040305",
              label: "机械冲、钻孔灌注桩基础作业",
              children: [
                {
                  value: "04030501",
                  label: "埋设护筒",
                  riskLevel: 2
                },
                {
                  value: "04030502",
                  label: "桩机就位和钻进操作",
                  riskLevel: 2
                },
                {
                  value: "04030503",
                  label: "冲孔操作和清孔及换浆",
                  riskLevel: 2
                },
                {
                  value: "04030504",
                  label: "钢筋笼制作与吊放",
                  riskLevel: 2
                },
                {
                  value: "04030505",
                  label: "导管安装与下放及混凝土灌注",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "040306",
              label: "锚杆基础作业",
              children: [
                {
                  value: "04030601",
                  label: "机械钻孔",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "040307",
              label: "人工挖孔桩基础作业",
              children: [
                {
                  value: "04030701",
                  label: "开挖第一节及护壁",
                  riskLevel: 1
                },
                {
                  value: "04030702",
                  label: "架设垂直运输系统",
                  riskLevel: 2
                },
                {
                  value: "04030703",
                  label: "支模、护壁",
                  riskLevel: 2
                },
                {
                  value: "04030704",
                  label: "逐层往下循环作业坑深小于等于15m",
                  riskLevel: 3
                },
                {
                  value: "04030705",
                  label: "人工开挖桩埋深超出15m",
                  riskLevel: 4
                },
                {
                  value: "04030706",
                  label: "底盘扩底基坑清理",
                  riskLevel: 3
                },
                {
                  value: "04030707",
                  label: "钢筋笼制作与吊放",
                  riskLevel: 2
                },
                {
                  value: "04030708",
                  label: "混凝土作业",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "040308",
              label: "高压旋喷桩基础作业",
              children: [
                {
                  value: "04030801",
                  label: "桩机就位和钻进成孔",
                  riskLevel: 2
                },
                {
                  value: "04030802",
                  label: "旋喷注浆和提升拔管",
                  riskLevel: 2
                }
              ]
            }
          ]
        },
        {
          value: "0404",
          label: "钢筋工程",
          children: [
            {
              value: "04040001",
              label: "钢筋加工",
              riskLevel: 2
            },
            {
              value: "04040002",
              label: "切割焊接",
              riskLevel: 2
            }
          ]
        },
        {
          value: "0405",
          label: "工地运输",
          children: [
            {
              value: "04050001",
              label: "人力运输",
              riskLevel: 2
            },
            {
              value: "04050002",
              label: "机动车运输及山区交通",
              riskLevel: 2
            },
            {
              value: "04050003",
              label: "畜力运输",
              riskLevel: 2
            },
            {
              value: "04050004",
              label: "水上运输（载人）",
              riskLevel: 3
            },
            {
              value: "04050005",
              label: "水上运输（载物）",
              riskLevel: 2
            },
            {
              value: "04050006",
              label: "索道架设",
              riskLevel: 3
            },
            {
              value: "04050007",
              label: "索道运输",
              riskLevel: 3
            },
            {
              value: "04050008",
              label: "栈桥搭设、拆除施工",
              riskLevel: 2
            }
          ]
        },
        {
          value: "0406",
          label: "基础工程",
          children: [
            {
              value: "040601",
              label: "模板施工",
              children: [
                {
                  value: "04060101",
                  label: "模板安装和支护作业",
                  riskLevel: 2
                },
                {
                  value: "04060102",
                  label: "高度在2m到8米模板安装和支护",
                  riskLevel: 3
                },
                {
                  value: "04060103",
                  label: "高度超过8m且跨度超过18m的模板支护",
                  riskLevel: 4
                }
              ]
            },
            {
              value: "040602",
              label: "钢筋施工",
              children: [
                {
                  value: "04060201",
                  label: "钢筋绑扎安装作业",
                  riskLevel: 1
                }
              ]
            },
            {
              value: "040603",
              label: "作业平台搭设",
              children: [
                {
                  value: "04060301",
                  label: "搭设平台",
                  riskLevel: 2
                },
                {
                  value: "04060302",
                  label: "搭设平台（跨度或高度大于2m）",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "040604",
              label: "混凝土浇注",
              children: [
                {
                  value: "04060401",
                  label: "搅拌系统布置",
                  riskLevel: 2
                },
                {
                  value: "04060402",
                  label: "混凝土搅拌、运输、浇筑和振捣",
                  riskLevel: 2
                },
                {
                  value: "04060403",
                  label: "拆模和养护",
                  riskLevel: 2
                }
              ]
            }
          ]
        },
        {
          value: "0407",
          label: "接地工程",
          children: [
            {
              value: "04070001",
              label: "开掘敷设和焊接回填",
              riskLevel: 2
            }
          ]
        },
        {
          value: "0408",
          label: "杆塔施工",
          children: [
            {
              value: "040801",
              label: "水泥杆施工",
              children: [
                {
                  value: "04080101",
                  label: "水泥杆排杆",
                  riskLevel: 2
                },
                {
                  value: "04080102",
                  label: "水泥杆焊接",
                  riskLevel: 2
                },
                {
                  value: "04080103",
                  label: "地锚选择、设置及埋设",
                  riskLevel: 3
                },
                {
                  value: "04080104",
                  label: "水泥杆组立",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "040802",
              label: "钢管杆施工",
              children: [
                {
                  value: "04080201",
                  label: "起重机械就位和吊装",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "040803",
              label: "附着式外拉线分解组立",
              children: [
                {
                  value: "04080301",
                  label: "地面塔片组装",
                  riskLevel: 1
                },
                {
                  value: "04080302",
                  label: "吊装塔片及组装",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "040804",
              label: "悬浮抱杆分解组立",
              children: [
                {
                  value: "04080401",
                  label: "吊装塔腿塔片",
                  riskLevel: 2
                },
                {
                  value: "04080402",
                  label: "地锚坑选择、设置及埋设",
                  riskLevel: 3
                },
                {
                  value: "04080403",
                  label: "抱杆系统布置和起立抱杆",
                  riskLevel: 3
                },
                {
                  value: "04080404",
                  label: "地面塔片组装",
                  riskLevel: 1
                },
                {
                  value: "04080405",
                  label: "提升抱杆",
                  riskLevel: 2
                },
                {
                  value: "04080406",
                  label: "吊装和组装塔片、塔段",
                  riskLevel: 3
                },
                {
                  value: "04080407",
                  label: "拆除抱杆",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "040805",
              label: "整体立塔施工",
              children: [
                {
                  value: "04080501",
                  label: "地面组装",
                  riskLevel: 2
                },
                {
                  value: "04080502",
                  label: "临时地锚选择及设置",
                  riskLevel: 3
                },
                {
                  value: "04080503",
                  label: "抱杆系统布置",
                  riskLevel: 2
                },
                {
                  value: "04080504",
                  label: "初始起立正式起立慢速起立停止牵引调整塔身固定临时拉线",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "040806",
              label: "落地通天抱杆分解吊装组立（带摇臂）",
              children: [
                {
                  value: "04080601",
                  label: "牵引设备和临时地锚布置",
                  riskLevel: 3
                },
                {
                  value: "04080602",
                  label: "地面组装",
                  riskLevel: 2
                },
                {
                  value: "04080603",
                  label: "组立塔腿",
                  riskLevel: 3
                },
                {
                  value: "04080604",
                  label: "起立抱杆和倒装抱杆",
                  riskLevel: 3
                },
                {
                  value: "04080605",
                  label: "吊装塔片和塔段",
                  riskLevel: 3
                },
                {
                  value: "04080606",
                  label: "抱杆拆除",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "040807",
              label: "落地通天抱杆分解吊装组立（不带摇臂）",
              children: [
                {
                  value: "04080701",
                  label: "牵引设备和临时地锚布置",
                  riskLevel: 3
                },
                {
                  value: "04080702",
                  label: "地面组装",
                  riskLevel: 2
                },
                {
                  value: "04080703",
                  label: "组立塔腿",
                  riskLevel: 3
                },
                {
                  value: "04080704",
                  label: "起立抱杆和倒装抱杆",
                  riskLevel: 3
                },
                {
                  value: "04080705",
                  label: "吊装塔片和塔段",
                  riskLevel: 3
                },
                {
                  value: "04080706",
                  label: "拆除抱杆",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "040808",
              label: "起重机吊装立塔",
              children: [
                {
                  value: "04080801",
                  label: "起重机械设备及工器具的选择",
                  riskLevel: 3
                },
                {
                  value: "04080802",
                  label: "地面组装",
                  riskLevel: 2
                },
                {
                  value: "04080803",
                  label: "杆塔吊装及组装",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "040809",
              label: "临近带电体组立塔",
              children: [
                {
                  value: "04080901",
                  label: "各类型式组塔",
                  riskLevel: 4
                }
              ]
            }
          ]
        },
        {
          value: "0409",
          label: "架线施工",
          children: [
            {
              value: "040901",
              label: "跨越公路、铁路、航道作业",
              children: [
                {
                  value: "04090101",
                  label: "一般跨越架搭设和拆除（18m以下）",
                  riskLevel: 2
                },
                {
                  value: "04090102",
                  label: "一般跨越架搭设和拆除（18m及以上至24m以下）",
                  riskLevel: 3
                },
                {
                  value: "04090103",
                  label: "一般跨越架搭设和拆除（24m及以上）",
                  riskLevel: 4
                },
                {
                  value: "04090104",
                  label: "无跨越架跨越架线（使用防护网）",
                  riskLevel: 3
                },
                {
                  value: "04090105",
                  label: "跨越2级及以上公路",
                  riskLevel: 3
                },
                {
                  value: "04090106",
                  label: " 跨越高速公路",
                  riskLevel: 4
                },
                {
                  value: "04090107",
                  label: "跨越铁路",
                  riskLevel: 4
                },
                {
                  value: "04090108",
                  label: "跨越主通航河流、海上主航道",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "040902",
              label: "跨越（或同塔）架设架设电力线",
              children: [
                {
                  value: "04090201",
                  label: "停电跨越或同塔线路扩建第二回导线停电架设的作业",
                  riskLevel: 2
                },
                {
                  value: "04090202",
                  label:
                    "跨越110kV以下带电线路（或同塔扩建第二回，另一回不停电）作业",
                  riskLevel: 3
                },
                {
                  value: "04090203",
                  label:
                    "跨越110kV及以上带电线路（或同塔扩建第二回，另一回不停电）作业",
                  riskLevel: 4
                },
                {
                  value: "04090204",
                  label: "钻越带电线路作业",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "040903",
              label: "绝缘子挂设",
              children: [
                {
                  value: "04090301",
                  label: "挂绝缘子及放线滑车",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "040904",
              label: "导引绳展放",
              children: [
                {
                  value: "04090401",
                  label: "人力展放导引绳",
                  riskLevel: 2
                },
                {
                  value: "04090402",
                  label: "导引绳连接",
                  riskLevel: 3
                },
                {
                  value: "04090403",
                  label: "动力伞、飞艇展放导引绳",
                  riskLevel: 3
                },
                {
                  value: "04090404",
                  label: "无人直升机展放导引绳",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "040905",
              label: "牵引绳展放",
              children: [
                {
                  value: "04090501",
                  label: "人力布置",
                  riskLevel: 2
                },
                {
                  value: "04090502",
                  label: "机械牵引",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "040906",
              label: "张力放线",
              children: [
                {
                  value: "04090601",
                  label: "牵引场",
                  riskLevel: 3
                },
                {
                  value: "04090602",
                  label: "张力场",
                  riskLevel: 3
                },
                {
                  value: "04090603",
                  label: "地锚坑的埋设",
                  riskLevel: 3
                },
                {
                  value: "04090604",
                  label: "牵引绳连接和牵引绳与导线连接",
                  riskLevel: 2
                },
                {
                  value: "04090605",
                  label: "牵引绳和导地线换盘",
                  riskLevel: 2
                },
                {
                  value: "04090606",
                  label: "落地锚固",
                  riskLevel: 2
                },
                {
                  value: "04090607",
                  label: "通讯联络",
                  riskLevel: 3
                },
                {
                  value: "04090608",
                  label: "前、后过轮临锚设置",
                  riskLevel: 3
                },
                {
                  value: "04090609",
                  label: "地面压接",
                  riskLevel: 2
                },
                {
                  value: "04090610",
                  label: "导线升空",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "040907",
              label: "杆塔附件安装",
              children: [
                {
                  value: "04090701",
                  label: "挂设保安接地线",
                  riskLevel: 2
                },
                {
                  value: "04090702",
                  label: "提升工具的挂设",
                  riskLevel: 2
                },
                {
                  value: "04090703",
                  label: "二道保险",
                  riskLevel: 2
                },
                {
                  value: "04090704",
                  label: "安装悬垂线夹和其他附件、拆除多轮滑车",
                  riskLevel: 3
                },
                {
                  value: "04090705",
                  label: "耐张塔高空开断、高空压接和平衡挂线",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "040908",
              label: "间隔棒安装",
              children: [
                {
                  value: "04090801",
                  label: "间隔棒安装",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "040909",
              label: "跳线安装",
              children: [
                {
                  value: "04090901",
                  label: "安装跳线悬垂串和跳线压接",
                  riskLevel: 3
                }
              ]
            }
          ]
        },
        {
          value: "0410",
          label: "线路防护工程",
          children: [
            {
              value: "04100001",
              label: "砌筑基面清理",
              riskLevel: 2
            }
          ]
        },
        {
          value: "0411",
          label: "线路拆旧",
          children: [
            {
              value: "04110001",
              label: "导、地线拆除作业",
              riskLevel: 3
            },
            {
              value: "04110002",
              label: "杆塔拆除作业",
              riskLevel: 3
            }
          ]
        },
        {
          value: "0412",
          label: "中间验收",
          children: [
            {
              value: "04120001",
              label: "基础验收",
              riskLevel: 1
            },
            {
              value: "04120002",
              label: "架线前杆塔验收",
              riskLevel: 2
            },
            {
              value: "04120003",
              label: "竣工投运前验收",
              riskLevel: 2
            },
            {
              value: "04120004",
              label: "线路参数测量",
              riskLevel: 2
            }
          ]
        }
      ]
    },
    {
      value: "05",
      label: "电力沟道、隧道施工",
      children: [
        {
          value: "0501",
          label: "明开沟道施工",
          children: [
            {
              value: "050101",
              label: "沟槽开挖",
              children: [
                {
                  value: "05010101",
                  label: "普通沟槽开挖",
                  riskLevel: 2
                },
                {
                  value: "05010102",
                  label: "深度大于等于5m深基槽开挖",
                  riskLevel: 3
                },
                {
                  value: "05010103",
                  label: "锚喷加固",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "050102",
              label: "主体结构施工",
              children: [
                {
                  value: "05010201",
                  label: "垫层施工",
                  riskLevel: 2
                },
                {
                  value: "05010202",
                  label: "防水施工、防水保护层施工",
                  riskLevel: 2
                },
                {
                  value: "05010203",
                  label: "钢筋模板作业",
                  riskLevel: 2
                },
                {
                  value: "05010204",
                  label: "混凝土浇筑",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "050103",
              label: "附属工程施工",
              children: [
                {
                  value: "05010301",
                  label: "安装电缆支架和爬梯",
                  riskLevel: 2
                },
                {
                  value: "05010302",
                  label: "接地极、接地线安装",
                  riskLevel: 2
                },
                {
                  value: "05010303",
                  label: "通风亭和通风、排水、照明施工",
                  riskLevel: 2
                },
                {
                  value: "05010304",
                  label: "井腔、井盖施工",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "050104",
              label: "沟槽回填",
              children: [
                {
                  value: "05010401",
                  label: "分层回填夯实",
                  riskLevel: 1
                }
              ]
            }
          ]
        },
        {
          value: "0502",
          label: "浅埋暗挖隧道施工",
          children: [
            {
              value: "050201",
              label: "龙门架安装、拆除",
              children: [
                {
                  value: "05020101",
                  label: "龙门架安装",
                  riskLevel: 3
                },
                {
                  value: "05020102",
                  label: "龙门架拆除",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "050202",
              label: "竖井开挖",
              children: [
                {
                  value: "05020201",
                  label: "竖井开挖及支护",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "050203",
              label: "围岩（土）加固",
              children: [
                {
                  value: "05020301",
                  label: "全断面(半断面)注浆加固",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "050204",
              label: "隧道支护开挖",
              children: [
                {
                  value: "05020401",
                  label: "马头门开挖及支护",
                  riskLevel: 3
                },
                {
                  value: "05020402",
                  label: "隧道开挖及支护",
                  riskLevel: 3
                },
                {
                  value: "05020403",
                  label: "有限空间作业",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "050205",
              label: "竖井、隧道二衬施工",
              children: [
                {
                  value: "05020501",
                  label: "竖井、隧道二衬作业施工",
                  riskLevel: 2
                },
                {
                  value: "05020502",
                  label: "有限空间作业",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "050206",
              label: "竖井、隧道防水作业施工",
              children: [
                {
                  value: "05020601",
                  label: "防水作业",
                  riskLevel: 1
                },
                {
                  value: "05020602",
                  label: "钢筋作业模板作业",
                  riskLevel: 2
                },
                {
                  value: "05020603",
                  label: "混凝土浇筑施工",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "050207",
              label: "附属工程施工",
              children: [
                {
                  value: "05020701",
                  label: "安装电缆支架、平台和爬梯",
                  riskLevel: 1
                },
                {
                  value: "05020702",
                  label: "接地极和接地线安装",
                  riskLevel: 1
                },
                {
                  value: "05020703",
                  label: "通风亭、通风、排水、照明施工",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "050208",
              label: "竖井回填",
              children: [
                {
                  value: "05020801",
                  label: "分层回填夯实",
                  riskLevel: 1
                }
              ]
            }
          ]
        },
        {
          value: "0503",
          label: "盾构隧道施工",
          children: [
            {
              value: "050301",
              label: "始发及接收井施工",
              children: [
                {
                  value: "05030101",
                  label: "始发井及接收井开挖及支护",
                  riskLevel: 3
                },
                {
                  value: "05030102",
                  label: "中隔板、顶板施工",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "050302",
              label: "竖井防水施工",
              children: [
                {
                  value: "05030201",
                  label: "防水作业",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "050303",
              label: "盾构机安装、拆除施工",
              children: [
                {
                  value: "05030301",
                  label: "盾构机安装",
                  riskLevel: 3
                },
                {
                  value: "05030302",
                  label: "盾构机拆除",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "050304",
              label: "盾构机区间掘进施工",
              children: [
                {
                  value: "05030401",
                  label: "端头加固、盾构进洞作业",
                  riskLevel: 3
                },
                {
                  value: "05030402",
                  label: "土方开挖及出土",
                  riskLevel: 3
                },
                {
                  value: "05030403",
                  label: "管片安装",
                  riskLevel: 3
                },
                {
                  value: "05030404",
                  label: "管片背后注浆",
                  riskLevel: 3
                },
                {
                  value: "05030405",
                  label: "端头加固、盾构出洞",
                  riskLevel: 3
                }
              ]
            },
            {
              value: "050305",
              label: "附属工程施工",
              children: [
                {
                  value: "05030501",
                  label: "安装电缆支架和爬梯",
                  riskLevel: 1
                },
                {
                  value: "05030502",
                  label: "接地极、接地线施工",
                  riskLevel: 1
                },
                {
                  value: "05030503",
                  label: "通风亭、通风、排水、照明施工",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "050306",
              label: "机械设备日常维护",
              children: [
                {
                  value: "05030601",
                  label: "机械设备日常维护",
                  riskLevel: 2
                }
              ]
            },
            {
              value: "050307",
              label: "顶管施工",
              children: [
                {
                  value: "05030701",
                  label: "始发井及接收井开挖及支护",
                  riskLevel: 3
                },
                {
                  value: "05030702",
                  label: "顶管掘进",
                  riskLevel: 2
                }
              ]
            }
          ]
        },
        {
          value: "0504",
          label: "沟道、隧道竣工投运前验收",
          children: [
            {
              value: "05040001",
              label: "隧道验收",
              riskLevel: 2
            }
          ]
        }
      ]
    },
    {
      value: "06",
      label: "电缆线路工程",
      children: [
        {
          value: "0601",
          label: "电缆敷设施工",
          children: [
            {
              value: "06010001",
              label: "装卸电缆盘",
              riskLevel: 2
            },
            {
              value: "06010002",
              label: "有限空间作业",
              riskLevel: 2
            },
            {
              value: "06010003",
              label: "动火作业",
              riskLevel: 2
            },
            {
              value: "06010004",
              label: "电气焊工作",
              riskLevel: 2
            },
            {
              value: "06010005",
              label: "占路施工",
              riskLevel: 1
            },
            {
              value: "06010006",
              label: "直埋电缆",
              riskLevel: 2
            },
            {
              value: "06010007",
              label: "隧道敷设",
              riskLevel: 2
            },
            {
              value: "06010008",
              label: "排管敷设",
              riskLevel: 2
            },
            {
              value: "06010009",
              label: "水下敷设",
              riskLevel: 2
            },
            {
              value: "06010010",
              label: "桥架敷设",
              riskLevel: 2
            },
            {
              value: "06010011",
              label: "电缆登塔/引上敷设",
              riskLevel: 2
            }
          ]
        },
        {
          value: "0602",
          label: "站内工作",
          children: [
            {
              value: "06020001",
              label: "搭工作平台",
              riskLevel: 2
            },
            {
              value: "06020002",
              label: "运行设备区电缆工作",
              riskLevel: 2
            }
          ]
        },
        {
          value: "0603",
          label: "电缆附件安装施工",
          children: [
            {
              value: "06030001",
              label: "调直电缆",
              riskLevel: 1
            },
            {
              value: "06030002",
              label: "电缆接头制作",
              riskLevel: 2
            }
          ]
        },
        {
          value: "0604",
          label: "电缆试验",
          children: [
            {
              value: "06040001",
              label: "电缆外护套试验",
              riskLevel: 2
            },
            {
              value: "06040002",
              label: "电缆绝缘耐压试验",
              riskLevel: 3
            }
          ]
        },
        {
          value: "0605",
          label: "电缆停、送电施工",
          children: [
            {
              value: "06050001",
              label: "电缆切改",
              riskLevel: 3
            },
            {
              value: "06050002",
              label: "电缆核相",
              riskLevel: 2
            }
          ]
        },
        {
          value: "0606",
          label: "电缆线路竣工投运前验收",
          children: [
            {
              value: "06050001",
              label: "电缆设备检查",
              riskLevel: 2
            }
          ]
        }
      ]
    }
  ];
};

//获取工程编号级联选择器
export const getJobNumber = () => {
  return [
    {
      value: "变电工程",
      children: [
        {
          value: "主变压器系统设备安装",
          children: [
            {
              value: "主变压器安装",
              children: [
                {
                  value: "主变压器本体安装"
                },
                {
                  value: "主变压器检查"
                },
                {
                  value: "主变压器附件安装"
                },
                {
                  value: "主变压器注油及密封试验"
                },
                {
                  value: "主变压器整体检查"
                }
              ]
            },
            {
              value: "主变压器系统附属设备安装",
              children: [
                {
                  value: "中性点隔离开关安装"
                },
                {
                  value: "中性点电流互感器、避雷器安装"
                },
                {
                  value: "控制柜及端子箱检查安装"
                },
                {
                  value: "软母线安装"
                }
              ]
            },
            {
              value: "主变压器带电试运"
            }
          ]
        },
        {
          value: "主控及直流设备安装",
          children: [
            {
              value: "主控室设备安装",
              children: [
                {
                  value: "控制及保护和自动化屏安装"
                },
                {
                  value: "直流屏及充电设备安装"
                },
                {
                  value: "二次回路检查及接线"
                }
              ]
            },
            {
              value: "蓄电池组安装",
              children: [
                {
                  value: "蓄电池安装"
                },
                {
                  value: "充放电及容量测定"
                }
              ]
            }
          ]
        },
        {
          value: "×××kV配电装置安装",
          children: [
            {
              value: "主母线及旁路母线安装",
              children: [
                {
                  value: "绝缘子串安装"
                },
                {
                  value: "软母线安装"
                },
                {
                  value: "支柱绝缘子安装"
                },
                {
                  value: "管形母线安装"
                },
                {
                  value: "接地开关安装"
                }
              ]
            },
            {
              value: "电压互感器及避雷器安装",
              children: [
                {
                  value: "避雷器安装"
                },
                {
                  value: "电压互感器安装"
                },
                {
                  value: "隔离开关及接地开关安装"
                },
                {
                  value: "支柱绝缘子安装"
                },
                {
                  value: "引下线及跳线安装"
                },
                {
                  value: "箱柜安装"
                }
              ]
            },
            {
              value: "进出线(母联、分段及旁路)间隔安装",
              children: [
                {
                  value: "隔离开关安装"
                },
                {
                  value: "断路器安装"
                },
                {
                  value: "电流互感器安装"
                },
                {
                  value: "避雷器安装"
                },
                {
                  value: "穿墙套管安装"
                },
                {
                  value: "支柱绝缘子安装"
                },
                {
                  value: "引下线及跳线安装"
                },
                {
                  value: "就地控制设备安装"
                }
              ]
            },
            {
              value: "铁构架及网门安装",
              children: [
                {
                  value: "铁构架及网门安装"
                }
              ]
            },
            {
              value: "×××kV配电装置带电试运"
            }
          ]
        },
        {
          value: "×××kV封闭式组合电器安装",
          children: [
            {
              value: "封闭式组合电器检查安装",
              children: [
                {
                  value: "基础检查及设备支架安装"
                },
                {
                  value: "封闭式组合电器本体检查安装"
                },
                {
                  value: "电流互感器安装"
                },
                {
                  value: "电压互感器、避雷器安装"
                }
              ]
            },
            {
              value: "配套设备安装",
              children: [
                {
                  value: "电压(流)互感器安装"
                },
                {
                  value: "避雷器安装"
                },
                {
                  value: "软母线及引下线安装"
                }
              ]
            },
            {
              value: "就地控制设备安装",
              children: [
                {
                  value: "控制柜及就地箱安装"
                },
                {
                  value: "二次回路检查及接线"
                }
              ]
            },
            {
              value: "×××kV封闭式组合电器带电试运"
            }
          ]
        },
        {
          value: "××kV站用配电装置安装",
          children: [
            {
              value: "工作变压器安装",
              children: [
                {
                  value: "变压器本体安装"
                },
                {
                  value: "变压器检查"
                },
                {
                  value: "变压器附件安装"
                },
                {
                  value: "变压器注油及密封试验"
                },
                {
                  value: "控制及端子箱安装"
                },
                {
                  value: "变压器整体检查"
                }
              ]
            },
            {
              value: "备用变压器安装",
              children: [
                {
                  value: "变压器本体安装"
                },
                {
                  value: "变压器检查"
                },
                {
                  value: "变压器附件安装"
                },
                {
                  value: "变压器注油及密封试验"
                },
                {
                  value: "控制及端子箱安装"
                },
                {
                  value: "变压器整体检查"
                }
              ]
            },
            {
              value: "××kV配电柜安装",
              children: [
                {
                  value: "基础型钢安装"
                },
                {
                  value: "配电盘"
                },
                {
                  value: "母线安装"
                },
                {
                  value: "断路器检查"
                },
                {
                  value: "二次回路检查接线"
                }
              ]
            },
            {
              value: "站用低压配电装置安装",
              children: [
                {
                  value: "低压变压器安装"
                },
                {
                  value: "低压盘安装"
                },
                {
                  value: "母线安装"
                },
                {
                  value: "二次回路检查接线"
                }
              ]
            },
            {
              value: "×××kV系统设备带电试运"
            }
          ]
        },
        {
          value: "无功补偿装置安装",
          children: [
            {
              value: "电抗器安装",
              children: [
                {
                  value: "电抗器安装"
                },
                {
                  value: "引下线安装"
                }
              ]
            },
            {
              value: "电容器间隔安装",
              children: [
                {
                  value: "电容器安装"
                },
                {
                  value: "放电线圈安装"
                },
                {
                  value: "引下线安装"
                }
              ]
            },
            {
              value: "电容器组带电试运"
            }
          ]
        },
        {
          value: "全站电缆施工",
          children: [
            {
              value: "电缆管配制及敷设",
              children: [
                {
                  value: "电缆管配制及敷设"
                }
              ]
            },
            {
              value: "电缆架制作及安装",
              children: [
                {
                  value: "电缆架安装"
                }
              ]
            },
            {
              value: "电缆敷设",
              children: [
                {
                  value: "屋内电缆敷设"
                },
                {
                  value: "屋外电缆敷设"
                }
              ]
            },
            {
              value: "电力电缆终端及中间接头制作",
              children: [
                {
                  value: "电力电缆终端制作及安装"
                },
                {
                  value: "电力电缆接头制作及安装"
                }
              ]
            },
            {
              value: "控制电缆终端制作及安装",
              children: [
                {
                  value: "控制电缆终端制作及安装"
                }
              ]
            },
            {
              value: "35kV及以上电缆线路施工",
              children: [
                {
                  value: "35kV及以上电缆线路"
                }
              ]
            },
            {
              value: "电缆防火与阻燃",
              children: [
                {
                  value: "电缆防火与阻燃"
                }
              ]
            }
          ]
        },
        {
          value: "全站防雷及接地装置安装",
          children: [
            {
              value: "避雷针及引下线安装",
              children: [
                {
                  value: "避雷针及引下"
                }
              ]
            },
            {
              value: "接地装置安装",
              children: [
                {
                  value: "屋外接地装置安装"
                },
                {
                  value: "屋内接地装置安装"
                }
              ]
            }
          ]
        },
        {
          value: "全站电气照明装置安装",
          children: [
            {
              value: "屋外开关站照明安装",
              children: [
                {
                  value: "管路敷设"
                },
                {
                  value: "管内配线及接线"
                },
                {
                  value: "照明配电箱(板)安装"
                },
                {
                  value: "照明灯具安装"
                }
              ]
            },
            {
              value: "屋外道路照明安装",
              children: [
                {
                  value: "电缆敷设接线"
                },
                {
                  value: "照明灯具安装"
                }
              ]
            },
            {
              value: "屋外开关站照明回路通电检查"
            },
            {
              value: "屋外道路照明目路通电检查"
            }
          ]
        },
        {
          value: "通信系统设备安装",
          children: [
            {
              value: "通信系统一次设备安装",
              children: [
                {
                  value: "通信系统一次设备安装"
                }
              ]
            },
            {
              value: "微波通信设备安装",
              children: [
                {
                  value: "微波天线安装"
                },
                {
                  value: "微波馈线安装"
                },
                {
                  value: "微波机、光端及设备安装"
                },
                {
                  value: "程控交换机安装"
                }
              ]
            },
            {
              value: "通信蓄电池安装",
              children: [
                {
                  value: "免维护蓄电池安装"
                },
                {
                  value: "通信蓄电池充放电签证"
                }
              ]
            },
            {
              value: "通信系统接地",
              children: [
                {
                  value: "通信站防雷接地施工"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      value: "土建工程",
      children: [
        {
          value: "主控楼（联合楼）",
          children: [
            {
              value: "地基与基础"
            },
            {
              value: "主体结构"
            },
            {
              value: "建筑装饰装修"
            },
            {
              value: "屋面工程"
            },
            {
              value: "建筑给水及排水"
            },
            {
              value: "建筑电气"
            },
            {
              value: "通风与空调"
            }
          ]
        },
        {
          value: "×××继保室*"
        },
        {
          value: "×××屋内配电装置系统建、构筑物",
          children: [
            {
              value: "×××屋内配电装置室*"
            },
            {
              value: "屋外出线构支架",
              children: [
                {
                  value: "地基与基础"
                },
                {
                  value: "主体结构"
                }
              ]
            }
          ]
        },
        {
          value: "主变压器基础及构支架（包括区域配电装置）",
          children: [
            {
              value: "地基与基础"
            },
            {
              value: "主体结构"
            },
            {
              value: "装饰装修"
            }
          ]
        },
        {
          value: "×××屋外配电装置构筑物",
          children: [
            {
              value: "地基与基础"
            },
            {
              value: "主体结构"
            }
          ]
        },
        {
          value: "电缆沟（包括屋外、屋内电缆沟）",
          children: [
            {
              value: "地基工程"
            },
            {
              value: "电缆沟结构"
            },
            {
              value: "沟道装饰装修"
            },
            {
              value: "盖板制作、安装"
            },
            {
              value: "电缆沟防水"
            }
          ]
        },
        {
          value: "电缆隧道",
          children: [
            {
              value: "地基工程"
            },
            {
              value: "隧道混凝土结构"
            },
            {
              value: "电缆隧道防水"
            },
            {
              value: "隧道装饰装修"
            },
            {
              value: "动力、照明安装工程"
            },
            {
              value: "电缆隧道通风"
            },
            {
              value: "隧道排水"
            }
          ]
        },
        {
          value: "消防系统建、构筑物",
          children: [
            {
              value: "消防室（雨淋阀室、泡沫消防室、消防砂箱等建筑）*"
            },
            {
              value: "消防水泵房",
              children: [
                {
                  value: "地基与基础"
                },
                {
                  value: "主体结构*"
                },
                {
                  value: "建筑装饰装修*"
                },
                {
                  value: "屋面工程*"
                },
                {
                  value: "建筑给水及排水*"
                },
                {
                  value: "建筑电气*"
                }
              ]
            },
            {
              value: "消防水池",
              children: [
                {
                  value: "地基工程"
                },
                {
                  value: "水池结构"
                },
                {
                  value: "水池防水"
                },
                {
                  value: "屋面工程*"
                },
                {
                  value: "水池顶面覆土"
                },
                {
                  value: "水池装饰装修"
                }
              ]
            }
          ]
        },
        {
          value: "站用电系统建、构筑物",
          children: [
            {
              value: "站用电室*"
            },
            {
              value: "站用变压器基础及构支架"
            }
          ]
        },
        {
          value: "围墙及大门（包括站外护坡、排洪沟及警卫室）",
          children: [
            {
              value: "围墙及大门",
              children: [
                {
                  value: "围墙基础及排水沟"
                },
                {
                  value: "围墙结构"
                },
                {
                  value: "围墙装饰及大门"
                }
              ]
            },
            {
              value: "站外护坡",
              children: [
                {
                  value: "护坡地基"
                },
                {
                  value: "护坡结构"
                }
              ]
            },
            {
              value: "排洪沟（排水沟）",
              children: [
                {
                  value: "排洪沟地基"
                },
                {
                  value: "排洪沟结构"
                }
              ]
            },
            {
              value: "警卫室*"
            }
          ]
        },
        {
          value: "站内外道路",
          children: [
            {
              value: "站内道路",
              children: [
                {
                  value: "道路基础"
                },
                {
                  value: "道路结构"
                }
              ]
            },
            {
              value: "站外道路",
              children: [
                {
                  value: "道路基础"
                },
                {
                  value: "道路结构"
                }
              ]
            }
          ]
        },
        {
          value: "屋外场地工程",
          children: [
            {
              value: "场地平整及地面",
              children: [
                {
                  value: "地基与基础工程"
                },
                {
                  value: "场地地面"
                }
              ]
            },
            {
              value: "屋外场地照明",
              children: [
                {
                  value: "照明设施基础"
                },
                {
                  value: "电气照明"
                }
              ]
            }
          ]
        },
        {
          value: "室外给排水及雨污水系统建",
          children: [
            {
              value: "室外给水、排水管道",
              children: [
                {
                  value: "地基与基础"
                },
                {
                  value: "室外给水管网"
                },
                {
                  value: "室外排水管网"
                }
              ]
            },
            {
              value: "供水泵房",
              children: [
                {
                  value: "（分部、子分部、分项、检验批划分同消防水泵房）"
                }
              ]
            },
            {
              value: "水池",
              children: [
                {
                  value: "（分部、子分部、分项、检验批划分同消防水池）"
                }
              ]
            },
            {
              value: "雨水、污水排水泵房",
              children: [
                {
                  value: "（分部、子分部、分项、检验批划分同消防水泵房）"
                }
              ]
            },
            {
              value: "人工湿地",
              children: [
                {
                  value: "地基与基础"
                }
              ]
            }
          ]
        },
        {
          value: "生产、生活辅助建筑*"
        },
        {
          value: "消防设备安装工程",
          children: [
            {
              value: "火灾自动报警系统"
            },
            {
              value: "自动喷水灭火系统"
            },
            {
              value: "泡沫灭火系统"
            },
            {
              value: "建筑灭火器配制"
            }
          ]
        }
      ]
    },
    {
      value: "架空输电线路工程",
      children: [
        {
          value: "土石方工程",
          children: [
            { value: "路径复测" },
            { value: "普通基础坑分坑及开挖" },
            { value: "拉线基础坑分坑及开挖" },
            { value: "岩石、掏挖基础分坑及开挖" },
            { value: "施工基面及电气开方" }
          ]
        },
        {
          value: "基础工程",
          children: [
            { value: "现浇铁塔基础施工" },
            { value: "杆塔拉线（含锚杆拉线）基础施工" },
            { value: "预制装配式基础施工" },
            { value: "混凝土杆预制基础（三盘）施工" },
            { value: "岩石、掏挖基础施工" },
            { value: "灌注桩基础施工" },
            { value: "贯入桩基础施工" }
          ]
        },
        {
          value: "杆塔工程",
          children: [
            { value: "自立式铁塔组立" },
            { value: "拉线铁塔组立" },
            { value: "混凝土电杆组立" },
            { value: "钢管电杆组立" }
          ]
        },
        {
          value: "架线工程",
          children: [
            { value: "导线、地线展放" },
            { value: "导线、地线压接管施工" },
            { value: "紧线" },
            { value: "附件安装" },
            { value: "交叉跨越" }
          ]
        },
        {
          value: "接地工程",
          children: [
            { value: "水平接地装置施工" },
            { value: "垂直接地装置施工" }
          ]
        },
        {
          value: "线路防护设施",
          children: [{ value: "线路防护设施施工" }]
        }
      ]
    }
  ];
};

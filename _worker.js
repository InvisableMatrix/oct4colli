// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'sharedsub';
let guestToken = ''; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken = ''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID = ''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'Shared';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时
let total = 10;//TB
let timestamp = 4102329600000;//2099-12-31

//节点链接 + 订阅链接
let MainData = `
vless://6b7b8f5c-b40b-4aba-acbd-72f7b53a0888@162.159.251.160:443?encryption=none&security=tls&sni=fn.watermatrix.eu.org&fp=random&type=ws&host=fn.watermatrix.eu.org&path=%2F%3Fed%3D2560#Main%201
vless://6b7b8f5c-b40b-4aba-acbd-72f7b53a0888@141.101.114.122:443?encryption=none&security=tls&sni=fn.watermatrix.eu.org&fp=random&type=ws&host=fn.watermatrix.eu.org&path=%2F%3Fed%3D2560#Main%202
vless://6b7b8f5c-b40b-4aba-acbd-72f7b53a0888@162.159.49.59:443?encryption=none&security=tls&sni=fn.watermatrix.eu.org&fp=random&type=ws&host=fn.watermatrix.eu.org&path=%2F%3Fed%3D2560#Main%203
vless://6b7b8f5c-b40b-4aba-acbd-72f7b53a0888@198.41.193.52:443?encryption=none&security=tls&sni=fn.watermatrix.eu.org&fp=random&type=ws&host=fn.watermatrix.eu.org&path=%2F%3Fed%3D2560#Main%204
vless://6b7b8f5c-b40b-4aba-acbd-72f7b53a0888@198.41.208.233:443?encryption=none&security=tls&sni=fn.watermatrix.eu.org&fp=random&type=ws&host=fn.watermatrix.eu.org&path=%2F%3Fed%3D2560#Main%205
vless://0f142cd9-08b6-4851-b942-f5178eaff007@bia.redmatrix.eu.org:443?encryption=none&security=tls&sni=bia.rEDmatRIx.EU.OrG&alpn=http%2F1.1&fp=chrome&type=ws&host=bia.redmatrix.eu.org&path=%2FeyJqdW5rIjoib2ZEUnluaDkyenhLUjh5IiwicHJvdG9jb2wiOiJ2bCIsIm1vZGUiOiJwcm94eWlwIiwicGFuZWxJUHMiOlsibmEuODc3Nzc0Lnh5eiIsImNmLjg3Nzc3NC54eXoiLCJmcmVleXguY2xvdWRmbGFyZTg4LmV1Lm9yZyIsInNhYXMuc2luLmZhbiIsImN0LjA5MDIyNy54eXoiXX0%3D#%F0%9F%92%A6%2001
vless://0f142cd9-08b6-4851-b942-f5178eaff007@www.speedtest.net:443?encryption=none&security=tls&sni=bIa.redMAtrIX.eu.oRG&alpn=http%2F1.1&fp=chrome&type=ws&host=bia.redmatrix.eu.org&path=%2FeyJqdW5rIjoiTWZmeVo2R3QiLCJwcm90b2NvbCI6InZsIiwibW9kZSI6InByb3h5aXAiLCJwYW5lbElQcyI6WyJuYS44Nzc3NzQueHl6IiwiY2YuODc3Nzc0Lnh5eiIsImZyZWV5eC5jbG91ZGZsYXJlODguZXUub3JnIiwic2Fhcy5zaW4uZmFuIiwiY3QuMDkwMjI3Lnh5eiJdfQ%3D%3D#%F0%9F%92%A6%2002
vless://0f142cd9-08b6-4851-b942-f5178eaff007@172.67.206.72:443?encryption=none&security=tls&sni=BIa.RedMAtrix.eu.ORG&alpn=http%2F1.1&fp=chrome&type=ws&host=bia.redmatrix.eu.org&path=%2FeyJqdW5rIjoiY1pSY3pqdUdEb3JrTk9aIiwicHJvdG9jb2wiOiJ2bCIsIm1vZGUiOiJwcm94eWlwIiwicGFuZWxJUHMiOlsibmEuODc3Nzc0Lnh5eiIsImNmLjg3Nzc3NC54eXoiLCJmcmVleXguY2xvdWRmbGFyZTg4LmV1Lm9yZyIsInNhYXMuc2luLmZhbiIsImN0LjA5MDIyNy54eXoiXX0%3D#%F0%9F%92%A6%2003
vless://0f142cd9-08b6-4851-b942-f5178eaff007@104.21.69.75:443?encryption=none&security=tls&sni=bIA.reDmaTRIX.Eu.ORG&alpn=http%2F1.1&fp=chrome&type=ws&host=bia.redmatrix.eu.org&path=%2FeyJqdW5rIjoiTWJSTE13Tnc0VU9LMGkiLCJwcm90b2NvbCI6InZsIiwibW9kZSI6InByb3h5aXAiLCJwYW5lbElQcyI6WyJuYS44Nzc3NzQueHl6IiwiY2YuODc3Nzc0Lnh5eiIsImZyZWV5eC5jbG91ZGZsYXJlODguZXUub3JnIiwic2Fhcy5zaW4uZmFuIiwiY3QuMDkwMjI3Lnh5eiJdfQ%3D%3D#%F0%9F%92%A6%2004
vless://0f142cd9-08b6-4851-b942-f5178eaff007@162.159.39.147:443?encryption=none&security=tls&sni=BIA.REDmaTRix.EU.orG&alpn=http%2F1.1&fp=chrome&type=ws&host=bia.redmatrix.eu.org&path=%2FeyJqdW5rIjoiejVVdlROZ2gzIiwicHJvdG9jb2wiOiJ2bCIsIm1vZGUiOiJwcm94eWlwIiwicGFuZWxJUHMiOlsibmEuODc3Nzc0Lnh5eiIsImNmLjg3Nzc3NC54eXoiLCJmcmVleXguY2xvdWRmbGFyZTg4LmV1Lm9yZyIsInNhYXMuc2luLmZhbiIsImN0LjA5MDIyNy54eXoiXX0%3D#%F0%9F%92%A6%2005
vless://0f142cd9-08b6-4851-b942-f5178eaff007@104.16.19.118:443?encryption=none&security=tls&sni=bIA.rEDmaTRIX.Eu.oRg&alpn=http%2F1.1&fp=chrome&type=ws&host=bia.redmatrix.eu.org&path=%2FeyJqdW5rIjoiYnNxNksyNndIblIiLCJwcm90b2NvbCI6InZsIiwibW9kZSI6InByb3h5aXAiLCJwYW5lbElQcyI6WyJuYS44Nzc3NzQueHl6IiwiY2YuODc3Nzc0Lnh5eiIsImZyZWV5eC5jbG91ZGZsYXJlODguZXUub3JnIiwic2Fhcy5zaW4uZmFuIiwiY3QuMDkwMjI3Lnh5eiJdfQ%3D%3D#%F0%9F%92%A6%2006
vless://0f142cd9-08b6-4851-b942-f5178eaff007@162.159.25.8:443?encryption=none&security=tls&sni=biA.ReDmaTrIx.eu.orG&alpn=http%2F1.1&fp=chrome&type=ws&host=bia.redmatrix.eu.org&path=%2FeyJqdW5rIjoiMHF6eFYwaUsiLCJwcm90b2NvbCI6InZsIiwibW9kZSI6InByb3h5aXAiLCJwYW5lbElQcyI6WyJuYS44Nzc3NzQueHl6IiwiY2YuODc3Nzc0Lnh5eiIsImZyZWV5eC5jbG91ZGZsYXJlODguZXUub3JnIiwic2Fhcy5zaW4uZmFuIiwiY3QuMDkwMjI3Lnh5eiJdfQ%3D%3D#%F0%9F%92%A6%2007
vless://0f142cd9-08b6-4851-b942-f5178eaff007@162.159.24.175:443?encryption=none&security=tls&sni=BIa.rEDmATriX.Eu.ORG&alpn=http%2F1.1&fp=chrome&type=ws&host=bia.redmatrix.eu.org&path=%2FeyJqdW5rIjoiMUpRcDYzMEMiLCJwcm90b2NvbCI6InZsIiwibW9kZSI6InByb3h5aXAiLCJwYW5lbElQcyI6WyJuYS44Nzc3NzQueHl6IiwiY2YuODc3Nzc0Lnh5eiIsImZyZWV5eC5jbG91ZGZsYXJlODguZXUub3JnIiwic2Fhcy5zaW4uZmFuIiwiY3QuMDkwMjI3Lnh5eiJdfQ%3D%3D#%F0%9F%92%A6%2009
trojan://Seedgo@bia.redmatrix.eu.org:443?security=tls&sni=biA.reDMatriX.eU.ORg&alpn=http%2F1.1&fp=chrome&type=ws&host=bia.redmatrix.eu.org&path=%2FeyJqdW5rIjoiRnpuYlpOdjRrbE9PYU1vIiwicHJvdG9jb2wiOiJ0ciIsIm1vZGUiOiJwcm94eWlwIiwicGFuZWxJUHMiOlsibmEuODc3Nzc0Lnh5eiIsImNmLjg3Nzc3NC54eXoiLCJmcmVleXguY2xvdWRmbGFyZTg4LmV1Lm9yZyIsInNhYXMuc2luLmZhbiIsImN0LjA5MDIyNy54eXoiXX0%3D#%F0%9F%92%A6%2001
trojan://Seedgo@www.speedtest.net:443?security=tls&sni=BIa.rEdmAtriX.eu.ORg&alpn=http%2F1.1&fp=chrome&type=ws&host=bia.redmatrix.eu.org&path=%2FeyJqdW5rIjoibmtLTERlc3RxIiwicHJvdG9jb2wiOiJ0ciIsIm1vZGUiOiJwcm94eWlwIiwicGFuZWxJUHMiOlsibmEuODc3Nzc0Lnh5eiIsImNmLjg3Nzc3NC54eXoiLCJmcmVleXguY2xvdWRmbGFyZTg4LmV1Lm9yZyIsInNhYXMuc2luLmZhbiIsImN0LjA5MDIyNy54eXoiXX0%3D#%F0%9F%92%A6%2002
trojan://Seedgo@172.67.206.72:443?security=tls&sni=bIa.ReDmAtRIx.Eu.Org&alpn=http%2F1.1&fp=chrome&type=ws&host=bia.redmatrix.eu.org&path=%2FeyJqdW5rIjoiV3BlZTFVMDV0V0siLCJwcm90b2NvbCI6InRyIiwibW9kZSI6InByb3h5aXAiLCJwYW5lbElQcyI6WyJuYS44Nzc3NzQueHl6IiwiY2YuODc3Nzc0Lnh5eiIsImZyZWV5eC5jbG91ZGZsYXJlODguZXUub3JnIiwic2Fhcy5zaW4uZmFuIiwiY3QuMDkwMjI3Lnh5eiJdfQ%3D%3D#%F0%9F%92%A6%2003
trojan://Seedgo@104.21.69.75:443?security=tls&sni=bIA.redmaTrIx.EU.org&alpn=http%2F1.1&fp=chrome&type=ws&host=bia.redmatrix.eu.org&path=%2FeyJqdW5rIjoiM1NWQll3UjVMcVciLCJwcm90b2NvbCI6InRyIiwibW9kZSI6InByb3h5aXAiLCJwYW5lbElQcyI6WyJuYS44Nzc3NzQueHl6IiwiY2YuODc3Nzc0Lnh5eiIsImZyZWV5eC5jbG91ZGZsYXJlODguZXUub3JnIiwic2Fhcy5zaW4uZmFuIiwiY3QuMDkwMjI3Lnh5eiJdfQ%3D%3D#%F0%9F%92%A6%2004
trojan://Seedgo@162.159.39.147:443?security=tls&sni=BIA.RedmATrIX.Eu.oRg&alpn=http%2F1.1&fp=chrome&type=ws&host=bia.redmatrix.eu.org&path=%2FeyJqdW5rIjoiN0Uxa3lTcVIwNSIsInByb3RvY29sIjoidHIiLCJtb2RlIjoicHJveHlpcCIsInBhbmVsSVBzIjpbIm5hLjg3Nzc3NC54eXoiLCJjZi44Nzc3NzQueHl6IiwiZnJlZXl4LmNsb3VkZmxhcmU4OC5ldS5vcmciLCJzYWFzLnNpbi5mYW4iLCJjdC4wOTAyMjcueHl6Il19#%F0%9F%92%A6%2005
trojan://Seedgo@104.16.19.118:443?security=tls&sni=bia.REDMatrIx.eu.OrG&alpn=http%2F1.1&fp=chrome&type=ws&host=bia.redmatrix.eu.org&path=%2FeyJqdW5rIjoiSnNGMFJ4cTJYY2dWOGR6NiIsInByb3RvY29sIjoidHIiLCJtb2RlIjoicHJveHlpcCIsInBhbmVsSVBzIjpbIm5hLjg3Nzc3NC54eXoiLCJjZi44Nzc3NzQueHl6IiwiZnJlZXl4LmNsb3VkZmxhcmU4OC5ldS5vcmciLCJzYWFzLnNpbi5mYW4iLCJjdC4wOTAyMjcueHl6Il19#%F0%9F%92%A6%2006
trojan://Seedgo@162.159.25.8:443?security=tls&sni=bia.reDMATRiX.Eu.oRg&alpn=http%2F1.1&fp=chrome&type=ws&host=bia.redmatrix.eu.org&path=%2FeyJqdW5rIjoiMUUxdmtZQWs1Q29hdSIsInByb3RvY29sIjoidHIiLCJtb2RlIjoicHJveHlpcCIsInBhbmVsSVBzIjpbIm5hLjg3Nzc3NC54eXoiLCJjZi44Nzc3NzQueHl6IiwiZnJlZXl4LmNsb3VkZmxhcmU4OC5ldS5vcmciLCJzYWFzLnNpbi5mYW4iLCJjdC4wOTAyMjcueHl6Il19#%F0%9F%92%A6%2007
trojan://Seedgo@162.159.152.81:443?security=tls&sni=bIA.ReDMATrIX.eU.ORg&alpn=http%2F1.1&fp=chrome&type=ws&host=bia.redmatrix.eu.org&path=%2FeyJqdW5rIjoidnVNS2x5aUZjRm96MCIsInByb3RvY29sIjoidHIiLCJtb2RlIjoicHJveHlpcCIsInBhbmVsSVBzIjpbIm5hLjg3Nzc3NC54eXoiLCJjZi44Nzc3NzQueHl6IiwiZnJlZXl4LmNsb3VkZmxhcmU4OC5ldS5vcmciLCJzYWFzLnNpbi5mYW4iLCJjdC4wOTAyMjcueHl6Il19#%F0%9F%92%A6%2008
trojan://Seedgo@162.159.24.175:443?security=tls&sni=bia.RedmATrIX.eu.OrG&alpn=http%2F1.1&fp=chrome&type=ws&host=bia.redmatrix.eu.org&path=%2FeyJqdW5rIjoiV0VGaVhPNDVzUHBOciIsInByb3RvY29sIjoidHIiLCJtb2RlIjoicHJveHlpcCIsInBhbmVsSVBzIjpbIm5hLjg3Nzc0Lnh5eiIsImNmLjg3Nzc0Lnh5eiIsImZyZWV5eC5jbG91ZGZsYXJlODguZXUub3JnIiwic2Fhcy5zaW4uZmFuIiwiY3QuMDkwMjI3Lnh5eiJdfQ%3D%3D#%F0%9F%92%A6%2009
vmess://eyJwcyI6IlVTLTEiLCJhZGQiOiI0Ny44My4xMC43MCIsImFpZCI6MCwiaWQiOiJlN2I4OGUxNi03NDgwLTRlYzEtZTFmMi01MjNiNDU0NjI0NjciLCJuZXQiOiJ0Y3AiLCJzY3kiOiJhdXRvIiwicG9ydCI6NTM1NDQsInRscyI6IiJ9
hysteria2://3ee8786f-9ccf-43e6-b962-eb996d75d09b@tw-me-04.linlujs.pw:30099/?insecure=1#CN-2
hysteria2://3ee8786f-9ccf-43e6-b962-eb996d75d09b@tw-me-03.linlujs.pw:30044/?insecure=1#CN-3
hysteria2://i2gYOF-gdrrTxQi_leG9hC1A@starlink-sg4.2513142.xyz:443/?insecure=1&sni=www.cloudflare.com#SG-4
hysteria2://i2gYOF-gdrrTxQi_leG9hC1A@starlink-sg2.2513142.xyz:443/?insecure=1&sni=www.cloudflare.com#SG-5
hysteria2://i2gYOF-gdrrTxQi_leG9hC1A@starlink-jp2.2513142.xyz:443/?insecure=1&sni=www.cloudflare.com#US-6
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:2083?security=tls&type=ws&sni=1756688386.speed.sgxjpb.china.nicchina.pp.ua&host=1756688386.speed.sgxjpb.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-7
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:2096?security=tls&type=ws&sni=1756688386.speed.sgxjpa.china.nicchina.pp.ua&host=1756688386.speed.sgxjpa.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-8
hysteria2://i2gYOF-gdrrTxQi_leG9hC1A@starlink-jp6.2513142.xyz:443/?insecure=1&sni=www.cloudflare.com#US-9
hysteria2://3ee8786f-9ccf-43e6-b962-eb996d75d09b@jp-nb-03.linlujs.pw:28544/?insecure=1#CN-10
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:2083?security=tls&type=ws&sni=1756688386.speed.sgxjpf.china.nicchina.pp.ua&host=1756688386.speed.sgxjpf.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-11
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:2096?security=tls&type=ws&sni=1756688386.speed.sgxjpe.china.nicchina.pp.ua&host=1756688386.speed.sgxjpe.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-12
hysteria2://i2gYOF-gdrrTxQi_leG9hC1A@starlink-jp4.2513142.xyz:443/?insecure=1&sni=www.cloudflare.com#US-13
vless://9aeaf0e2-97c3-479c-9a9c-ccd3e363ad83@178.239.126.163:443?security=reality&flow=xtls-rprx-vision&type=tcp&sni=main.m.taobao.com&encryption=none&fp=firefox&pbk=nSPKSGxXa4JujzZazaD548HYP9-oppMoao6tf_YI4VY&sid=86a715&headerType=none#BG-14
hysteria2://3ee8786f-9ccf-43e6-b962-eb996d75d09b@jp-nb-04.linlujs.pw:24452/?insecure=1#CN-15
vless://9aeaf0e2-97c3-479c-9a9c-ccd3e363ad83@bage-jp2.xiaoqi555.xyz:443?security=reality&flow=xtls-rprx-vision&type=tcp&sni=iosapps.itunes.apple.com&encryption=none&fp=ios&pbk=dMmDT4pSrkW322F2_d4iNn_ePir-P7H9vDhHgr4nxWg&sid=86a715&headerType=none#BG-16
vless://9aeaf0e2-97c3-479c-9a9c-ccd3e363ad83@178.239.126.28:443?security=reality&flow=xtls-rprx-vision&type=tcp&sni=main.m.taobao.com&encryption=none&fp=edge&pbk=KOp9dbJ_qjC2AejK-HGqFB3H28yyKQzBooSEY-jo_nU&sid=86a715&headerType=none#BG-17
hysteria2://3ee8786f-9ccf-43e6-b962-eb996d75d09b@jp-nb-05.linlujs.pw:30002/?insecure=1#CN-18
hysteria2://3ee8786f-9ccf-43e6-b962-eb996d75d09b@kr-ak-01.linlujs.pw:27743/?insecure=1#KR-19
hysteria2://i2gYOF-gdrrTxQi_leG9hC1A@starlink-jp5.2513142.xyz:443/?insecure=1&sni=www.cloudflare.com#JP-20
hysteria2://i2gYOF-gdrrTxQi_leG9hC1A@starlink-jp3.2513142.xyz:443/?insecure=1&sni=www.cloudflare.com#JP-21
hysteria2://61b60e8c-a623-472f-8ba4-e96c07c3f2c2@jp.mxlk.net:21019/?insecure=1#JP-22
hysteria2://61b60e8c-a623-472f-8ba4-e96c07c3f2c2@jp.mxlk.net:21009/?insecure=1#JP-23
hysteria2://61b60e8c-a623-472f-8ba4-e96c07c3f2c2@jp.mxlk.net:21042/?insecure=1#JP-24
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:2087?security=tls&type=ws&sni=1756688386.speed.jpkcd.china.nicchina.pp.ua&host=1756688386.speed.jpkcd.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-25
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:8443?security=tls&type=ws&sni=1756688386.speed.sgxjpd.china.nicchina.pp.ua&host=1756688386.speed.sgxjpd.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-26
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:2096?security=tls&type=ws&sni=1756688386.speed.sgxjpc.china.nicchina.pp.ua&host=1756688386.speed.sgxjpc.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-27
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:8443?security=tls&type=ws&sni=1756688386.speed.jpkcb.china.nicchina.pp.ua&host=1756688386.speed.jpkcb.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-28
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:2096?security=tls&type=ws&sni=1756688386.speed.jpkca.china.nicchina.pp.ua&host=1756688386.speed.jpkca.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-29
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:2053?security=tls&type=ws&sni=1756688386.speed.jpkcc.china.nicchina.pp.ua&host=1756688386.speed.jpkcc.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-30
vless://79b2b6cb-8a45-4324-aca0-fdcad2961420@us2do.interld123456789.com:10002?security=none&flow=xtls-rprx-vision&type=tcp&sni=addons.mozilla.org&encryption=none&fp=firefox&pbk=xnzUvDQZ4B45lUi40lFKOLWiJdPQW8LzhGsGandvvlc&sid=ad081079&headerType=none#US-31
vless://563608cd-f135-4e64-938d-d9eb3be1ba77@185.159.247.41:2096?security=tls&type=ws&sni=vless.keepfuck.me&host=vless.keepfuck.me&encryption=none&type=ws&path=%2Fsnippets&headerType=none#BR-32
vless://79b2b6cb-8a45-4324-aca0-fdcad2961420@us3do.interld123456789.com:10002?security=none&flow=xtls-rprx-vision&type=tcp&sni=addons.mozilla.org&encryption=none&fp=firefox&pbk=xnzUvDQZ4B45lUi40lFKOLWiJdPQW8LzhGsGandvvlc&sid=ad081079&headerType=none#US-33
hysteria2://i2gYOF-gdrrTxQi_leG9hC1A@starlink-us7.2513142.xyz:443/?insecure=1&sni=www.cloudflare.com#US-34
hysteria2://i2gYOF-gdrrTxQi_leG9hC1A@starlink-us5.2513142.xyz:443/?insecure=1&sni=www.cloudflare.com#US-35
hysteria2://i2gYOF-gdrrTxQi_leG9hC1A@starlink-us8.2513142.xyz:443/?insecure=1&sni=www.cloudflare.com#US-36
vless://79b2b6cb-8a45-4324-aca0-fdcad2961420@us1do.interld123456789.com:10002?security=none&flow=xtls-rprx-vision&type=tcp&sni=addons.mozilla.org&encryption=none&fp=firefox&pbk=xnzUvDQZ4B45lUi40lFKOLWiJdPQW8LzhGsGandvvlc&sid=ad081079&headerType=none#US-37
hysteria2://i2gYOF-gdrrTxQi_leG9hC1A@starlink-us3.2513142.xyz:443/?insecure=1&sni=www.cloudflare.com#US-38
hysteria2://65d91178-3746-49c9-80d5-0e7a23a94c56@pepslgy2.pepsl.top:14568/?insecure=1&sni=pepslgy2.pepsl.top#IR-39
hysteria2://i2gYOF-gdrrTxQi_leG9hC1A@starlink-us4.2513142.xyz:443/?insecure=1&sni=www.cloudflare.com#US-40
hysteria2://3ee8786f-9ccf-43e6-b962-eb996d75d09b@us-nb-03.linlujs.pw:25411/?insecure=1#CN-41
hysteria2://3ee8786f-9ccf-43e6-b962-eb996d75d09b@us-nb-01.linlujs.pw:25684/?insecure=1#CN-42
hysteria2://i2gYOF-gdrrTxQi_leG9hC1A@starlink-us1.2513142.xyz:443/?insecure=1&sni=www.cloudflare.com#US-43
hysteria2://3ee8786f-9ccf-43e6-b962-eb996d75d09b@us-nb-02.linlujs.pw:25733/?insecure=1#CN-44
hysteria2://79b2b6cb-8a45-4324-aca0-fdcad2961420@jp1.interld123456789.com:36000/?insecure=1&sni=1231231.1234567890spcloud.com#JP-45
vless://d2965257-0536-4811-a0d5-cdce54e90326@162.159.142.252:2083?security=tls&type=ws&sni=fei.634676.xyz&host=fei.634676.xyz&encryption=none&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-46
hysteria2://5cb699bc-f8ed-4584-95d0-137ebfa5431b@gbr1.587458.xyz:1443/?insecure=1&sni=gbr1.587458.xyz#GB-47
vless://6fd62709-54d9-43aa-bf9e-00776a0a25d3@ip.sb:443?security=tls&type=ws&sni=81715dc4.se-8ea.pages.dev&host=81715dc4.se-8ea.pages.dev&encryption=none&type=ws&path=%2Fx0nlkw0wqjljeqwv%2Fmti5lje1ms4ymdquote%3D%3Fed%3D2560&headerType=none#US-48
vless://6c7a6a6a-6a6a-4000-8000-000000000002@104.20.2.221:8443?security=tls&type=ws&sni=bycf.lzjnb.shop&host=bycf.lzjnb.shop&encryption=none&type=ws&path=%2Ftel-%40v2rayn5%2F%3Fed%3D2560&headerType=none#US-49
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:2096?security=tls&type=ws&sni=1756688386.speed.ukpgka.china.nicchina.pp.ua&host=1756688386.speed.ukpgka.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-50
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:2083?security=tls&type=ws&sni=1756688386.speed.ukpgkd.china.nicchina.pp.ua&host=1756688386.speed.ukpgkd.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-51
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:2083?security=tls&type=ws&sni=1756688386.speed.ukpgke.china.nicchina.pp.ua&host=1756688386.speed.ukpgke.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-52
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:2096?security=tls&type=ws&sni=1756688386.speed.ukpgkc.china.nicchina.pp.ua&host=1756688386.speed.ukpgkc.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-53
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:8443?security=tls&type=ws&sni=1756688386.speed.ukpgkb.china.nicchina.pp.ua&host=1756688386.speed.ukpgkb.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-54
hysteria2://3ee8786f-9ccf-43e6-b962-eb996d75d09b@fra-nb-01.linlujs.pw:24568/?insecure=1#CN-55
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:2087?security=tls&type=ws&sni=1756688386.speed.deacgka.china.nicchina.pp.ua&host=1756688386.speed.deacgka.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-56
hysteria2://10d1df1f-520e-4c82-a89a-71f510153847@45.11.1.62:50200/?insecure=1#US-57
hysteria2://79b2b6cb-8a45-4324-aca0-fdcad2961420@sg3.interld123456789.com:36000/?insecure=1&sni=1231231.1234567890spcloud.com#SG-58
vless://1ccc1dd8-d8ed-4b69-b0c2-27f6282f9755@sp.bujidao302.com:443?security=tls&type=xhttp&sni=sp.bujidao302.com&encryption=none&fp=chrome&alpn=h3,h2,http/1.1&headerType=none#US-59
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:8443?security=tls&type=ws&sni=1756688386.speed.asbppke.china.nicchina.pp.ua&host=1756688386.speed.asbppke.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-60
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:2087?security=tls&type=ws&sni=1756688386.speed.asbppkg.china.nicchina.pp.ua&host=1756688386.speed.asbppkg.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-61
hysteria2://9aeaf0e2-97c3-479c-9a9c-ccd3e363ad83@zhaji-uk.xiao666666.site:51347/?insecure=1&sni=iosapps.itunes.apple.com#US-62
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:8443?security=tls&type=ws&sni=1756688386.speed.asbppkf.china.nicchina.pp.ua&host=1756688386.speed.asbppkf.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-63
hysteria2://10d1df1f-520e-4c82-a89a-71f510153847@45.11.1.62:50000/?insecure=1&sni=www.microsoft.com#US-64
hysteria2://f5120df8-92db-4aa4-90c4-08e3b6e69d98@uk-001.xiaoxiaobujidao.xyz:9443/?insecure=1&sni=uk-001.xiaoxiaobujidao.xyz#BG-65
hysteria2://i2gYOF-gdrrTxQi_leG9hC1A@starlink-fra.2513142.xyz:443/?insecure=1&sni=www.cloudflare.com#DE-66
hysteria2://Yet-Another-Public-Config-1@yapc-1.adamhayward.co.uk:35200/?insecure=1&obfs=salamander&obfs-password=Yet-Another-Public-Config-1&sni=YAPC-1.afshin.ir#US-67
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:2087?security=tls&type=ws&sni=1756688386.speed.usazcjga.china.nicchina.pp.ua&host=1756688386.speed.usazcjga.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-68
hysteria2://i2gYOF-gdrrTxQi_leG9hC1A@starlink-fra2.2513142.xyz:443/?insecure=1&sni=www.cloudflare.com#DE-69
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:8443?security=tls&type=ws&sni=1756688386.speed.usazcjgd.china.nicchina.pp.ua&host=1756688386.speed.usazcjgd.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-70
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:2083?security=tls&type=ws&sni=1756688386.speed.usadalsa.china.nicchina.pp.ua&host=1756688386.speed.usadalsa.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-71
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:2083?security=tls&type=ws&sni=1756688386.speed.nyueb.china.nicchina.pp.ua&host=1756688386.speed.nyueb.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-72
vless://59b3242f-6e1b-45f7-a57d-183192cc87fe@172.67.134.196:443?security=tls&type=ws&sni=avid.gorbe.store&host=avid.gorbe.store&encryption=none&type=ws&path=%2Frandom&headerType=none#US-73
hysteria2://9aeaf0e2-97c3-479c-9a9c-ccd3e363ad83@zhaji-hl.xiao666666.site:52161/?insecure=1&sni=iosapps.itunes.apple.com#NL-74
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:2053?security=tls&type=ws&sni=1756688386.speed.usazcjgb.china.nicchina.pp.ua&host=1756688386.speed.usazcjgb.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-75
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:2087?security=tls&type=ws&sni=1756688386.speed.usazcjgc.china.nicchina.pp.ua&host=1756688386.speed.usazcjgc.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-76
hysteria2://61b60e8c-a623-472f-8ba4-e96c07c3f2c2@es.mxlk.net:21001/?insecure=1#DE-77
hysteria2://Yet-Another-Public-Config-1@yapc-1.adamhayward.co.uk:36400/?insecure=1&obfs=salamander&obfs-password=Yet-Another-Public-Config-1&sni=YAPC-1.afshin.ir#US-78
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:2083?security=tls&type=ws&sni=1756688386.speed.usacapoha.china.nicchina.pp.ua&host=1756688386.speed.usacapoha.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-79
hysteria2://Yet-Another-Public-Config-1@yapc-1.adamhayward.co.uk:36600/?insecure=1&obfs=salamander&obfs-password=Yet-Another-Public-Config-1&sni=YAPC-1.afshin.ir#US-80
trojan://i2gYOF-gdrrTxQi_leG9hC1A@185.36.127.46:20191?type=tcp&sni=www.cloudflare.com&allowInsecure=1#NO-81
hysteria2://Yet-Another-Public-Config-1@yapc-1.adamhayward.co.uk:36300/?insecure=1&obfs=salamander&obfs-password=Yet-Another-Public-Config-1&sni=YAPC-1.afshin.ir#US-82
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:2053?security=tls&type=ws&sni=1756688386.speed.asbppka.china.nicchina.pp.ua&host=1756688386.speed.asbppka.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-83
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:2087?security=tls&type=ws&sni=1756688386.speed.asbppkc.china.nicchina.pp.ua&host=1756688386.speed.asbppkc.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-84
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:8443?security=tls&type=ws&sni=1756688386.speed.deacgkb.china.nicchina.pp.ua&host=1756688386.speed.deacgkb.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-85
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:2053?security=tls&type=ws&sni=1756688386.speed.asbppkb.china.nicchina.pp.ua&host=1756688386.speed.asbppkb.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-86
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:8443?security=tls&type=ws&sni=1756688386.speed.nyuea.china.nicchina.pp.ua&host=1756688386.speed.nyuea.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-87
hysteria2://61b60e8c-a623-472f-8ba4-e96c07c3f2c2@es.mxlk.net:21011/?insecure=1#DE-88
hysteria2://61b60e8c-a623-472f-8ba4-e96c07c3f2c2@es.mxlk.net:21078/?insecure=1#DE-89
vless://f0efbd92-e8cc-4210-a773-54a86245caa1@1756688358.tencentapp.cn:2053?security=tls&type=ws&sni=1756688386.speed.laxusaa.china.nicchina.pp.ua&host=1756688386.speed.laxusaa.china.nicchina.pp.ua&encryption=none&fp=chrome&type=ws&path=%2F%3Fed%3D2560&headerType=none#US-90
trojan://i2gYOF-gdrrTxQi_leG9hC1A@161.132.51.133:20041?type=tcp&sni=www.cloudflare.com&allowInsecure=1#PE-91
hysteria2://Yet-Another-Public-Config-1@yapc-1.adamhayward.co.uk:35000/?insecure=1&obfs=salamander&obfs-password=Yet-Another-Public-Config-1&sni=YAPC-1.afshin.ir#US-92
hysteria2://5cb699bc-f8ed-4584-95d0-137ebfa5431b@91.108.247.11:443/?insecure=1&sni=de1.587458.xyz#AU-93
hysteria2://61b60e8c-a623-472f-8ba4-e96c07c3f2c2@sg.mxlk.net:21056/?insecure=1#FR-94
hysteria2://61b60e8c-a623-472f-8ba4-e96c07c3f2c2@sg.mxlk.net:21089/?insecure=1#FR-95
hysteria2://3ee8786f-9ccf-43e6-b962-eb996d75d09b@hk-hy-01.linlujs.pw:30005/?insecure=1#ES-96
hysteria2://3ee8786f-9ccf-43e6-b962-eb996d75d09b@sg-nb-01.linlujs.pw:30001/?insecure=1#CN-97
hysteria2://3ee8786f-9ccf-43e6-b962-eb996d75d09b@sg-nb-03.linlujs.pw:25664/?insecure=1#CN-98
hysteria2://61b60e8c-a623-472f-8ba4-e96c07c3f2c2@sg.mxlk.net:21071/?insecure=1#FR-99
hysteria2://3ee8786f-9ccf-43e6-b962-eb996d75d09b@sg-nb-05.linlujs.pw:29854/?insecure=1#CN-100
hysteria2://3ee8786f-9ccf-43e6-b962-eb996d75d09b@sg-nb-02.linlujs.pw:24785/?insecure=1#CN-101
vless://401374e6-df77-41fb-f638-dad8184f175b@184.174.80.250:443?security=tls&type=grpc&sni=pqh23v4.hiddendom.shop&encryption=none&alpn=h2&headerType=none#US-102
vless://c226ac5d-65e9-4379-95c3-fb542bc242d8@172.67.130.204:443?security=tls&type=ws&sni=ddDDdDDdDDF.777198.XyZ&host=ddDDdDDdDDF.777198.XyZ&encryption=none&type=ws&path=%2FOjdW89Bpg4ykd4O&headerType=none#US-103
hysteria2://3ee8786f-9ccf-43e6-b962-eb996d75d09b@sg-nb-04.linlujs.pw:29744/?insecure=1#CN-104
vless://401374e6-df77-41fb-f638-dad8184f175b@31.43.179.38:443?security=tls&type=grpc&sni=pqh23v4.hiddendom.shop&encryption=none&alpn=h2&headerType=none#UA-105
vless://401374e6-df77-41fb-f638-dad8184f175b@45.131.7.127:443?security=tls&type=grpc&sni=pqh23v4.hiddendom.shop&encryption=none&headerType=none#NL-106
hysteria2://fb3df6ad-28aa-4c3d-ac7e-8ae3b8279a67@mg1.jjzcloud.top:57238/?insecure=1&sni=mg1.jjzcloud.top#IR-107
vless://401374e6-df77-41fb-f638-dad8184f175b@103.160.204.145:443?security=tls&type=grpc&sni=pqh23v4.hiddendom.shop&encryption=none&alpn=h2&headerType=none#unKnow-108
vless://401374e6-df77-41fb-f638-dad8184f175b@154.83.2.167:443?security=tls&type=grpc&sni=pqh23v4.hiddendom.shop&encryption=none&alpn=h2&headerType=none#US-109
vless://401374e6-df77-41fb-f638-dad8184f175b@45.159.218.165:443?security=tls&type=grpc&sni=pqh24v3.hiddendom.shop&encryption=none&headerType=none#NL-110
vless://401374e6-df77-41fb-f638-dad8184f175b@31.43.179.38:443?security=tls&type=grpc&sni=pqh23v4.hiddendom.shop&encryption=none&headerType=none#UA-111
vless://401374e6-df77-41fb-f638-dad8184f175b@104.129.167.161:443?security=tls&type=grpc&sni=pqh23v4.hiddendom.shop&encryption=none&headerType=none#US-112
hysteria2://65d91178-3746-49c9-80d5-0e7a23a94c56@pepslgy1.pepsl.top:14568/?insecure=1&sni=pepslgy1.pepsl.top#NL-113
vless://401374e6-df77-41fb-f638-dad8184f175b@185.59.218.168:443?security=tls&type=grpc&sni=pqh23v4.hiddendom.shop&encryption=none&headerType=none#RU-114
vless://401374e6-df77-41fb-f638-dad8184f175b@94.247.142.103:443?security=tls&type=grpc&sni=pqh23v4.hiddendom.shop&encryption=none&alpn=h2&headerType=none#RU-115
vless://401374e6-df77-41fb-f638-dad8184f175b@102.177.189.251:443?security=tls&type=grpc&sni=pqh23v4.hiddendom.shop&encryption=none&alpn=h2&headerType=none#ZA-116
trojan://i2gYOF-gdrrTxQi_leG9hC1A@102.219.85.236:20261?type=tcp&sni=www.cloudflare.com&allowInsecure=1#unKnow-117
vless://401374e6-df77-41fb-f638-dad8184f175b@154.83.2.167:443?security=tls&type=grpc&sni=pqh23v4.hiddendom.shop&encryption=none&headerType=none#US-118
vless://401374e6-df77-41fb-f638-dad8184f175b@45.8.211.86:443?security=tls&type=grpc&sni=pqh23v4.hiddendom.shop&encryption=none&headerType=none#GB-119
hysteria2://b77401b2-5978-4658-9177-02b47aacaeb6@wmg1.wanlidag.top:5555/?insecure=1&sni=wmg1.wanlidag.top#IR-120
vless://59b3242f-6e1b-45f7-a57d-183192cc87fe@104.21.6.115:443?security=tls&type=ws&sni=avid.gorbe.store&host=avid.gorbe.store&encryption=none&type=ws&path=%2Frandom&headerType=none#US-121
vless://401374e6-df77-41fb-f638-dad8184f175b@94.247.142.103:443?security=tls&type=grpc&sni=pqh23v4.hiddendom.shop&encryption=none&headerType=none#RU-122
vless://401374e6-df77-41fb-f638-dad8184f175b@102.177.189.251:443?security=tls&type=grpc&sni=pqh23v4.hiddendom.shop&encryption=none&headerType=none#ZA-123
vless://401374e6-df77-41fb-f638-dad8184f175b@94.140.0.141:443?security=tls&type=grpc&sni=pqh23v4.hiddendom.shop&encryption=none&headerType=none#FR-124
vless://401374e6-df77-41fb-f638-dad8184f175b@94.140.0.141:443?security=tls&type=grpc&sni=pqh23v4.hiddendom.shop&encryption=none&alpn=h2&headerType=none#FR-125
`;

let urls = [];
let subConverter = "SUBAPI.cmliussss.net"; //在线订阅转换后端，目前使用CM的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subConfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件
let subProtocol = 'https';

export default {
	async fetch(request, env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID;
		TG = env.TG || TG;
		subConverter = env.SUBAPI || subConverter;
		if (subConverter.includes("http://")) {
			subConverter = subConverter.split("//")[1];
			subProtocol = 'http';
		} else {
			subConverter = subConverter.split("//")[1] || subConverter;
		}
		subConfig = env.SUBCONFIG || subConfig;
		FileName = env.SUBNAME || FileName;

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0);
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		guestToken = env.GUESTTOKEN || env.GUEST || guestToken;
		if (!guestToken) guestToken = await MD5MD5(mytoken);
		const 访客订阅 = guestToken;
		//console.log(`${fakeUserID}\n${fakeHostName}`); // 打印fakeID

		let UD = Math.floor(((timestamp - Date.now()) / timestamp * total * 1099511627776) / 2);
		total = total * 1099511627776;
		let expire = Math.floor(timestamp / 1000);
		SUBUpdateTime = env.SUBUPTIME || SUBUpdateTime;

		if (!([mytoken, fakeToken, 访客订阅].includes(token) || url.pathname == ("/" + mytoken) || url.pathname.includes("/" + mytoken + "?"))) {
			if (TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico") await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			if (env.URL302) return Response.redirect(env.URL302, 302);
			else if (env.URL) return await proxyURL(env.URL, url);
			else return new Response(await nginx(), {
				status: 200,
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else {
			if (env.KV) {
				await 迁移地址列表(env, 'LINK.txt');
				if (userAgent.includes('mozilla') && !url.search) {
					await sendMessage(`#编辑订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
					return await KV(request, env, 'LINK.txt', 访客订阅);
				} else {
					MainData = await env.KV.get('LINK.txt') || MainData;
				}
			} else {
				MainData = env.LINK || MainData;
				if (env.LINKSUB) urls = await ADD(env.LINKSUB);
			}
			let 重新汇总所有链接 = await ADD(MainData + '\n' + urls.join('\n'));
			let 自建节点 = "";
			let 订阅链接 = "";
			for (let x of 重新汇总所有链接) {
				if (x.toLowerCase().startsWith('http')) {
					订阅链接 += x + '\n';
				} else {
					自建节点 += x + '\n';
				}
			}
			MainData = 自建节点;
			urls = await ADD(订阅链接);
			await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			const isSubConverterRequest = request.headers.get('subconverter-request') || request.headers.get('subconverter-version') || userAgent.includes('subconverter');
			let 订阅格式 = 'base64';
			if (!(userAgent.includes('null') || isSubConverterRequest || userAgent.includes('nekobox') || userAgent.includes(('CF-Workers-SUB').toLowerCase()))) {
				if (userAgent.includes('sing-box') || userAgent.includes('singbox') || url.searchParams.has('sb') || url.searchParams.has('singbox')) {
					订阅格式 = 'singbox';
				} else if (userAgent.includes('surge') || url.searchParams.has('surge')) {
					订阅格式 = 'surge';
				} else if (userAgent.includes('quantumult') || url.searchParams.has('quanx')) {
					订阅格式 = 'quanx';
				} else if (userAgent.includes('loon') || url.searchParams.has('loon')) {
					订阅格式 = 'loon';
				} else if (userAgent.includes('clash') || userAgent.includes('meta') || userAgent.includes('mihomo') || url.searchParams.has('clash')) {
					订阅格式 = 'clash';
				}
			}

			let subConverterUrl;
			let 订阅转换URL = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
			//console.log(订阅转换URL);
			let req_data = MainData;

			let 追加UA = 'v2rayn';
			if (url.searchParams.has('b64') || url.searchParams.has('base64')) 订阅格式 = 'base64';
			else if (url.searchParams.has('clash')) 追加UA = 'clash';
			else if (url.searchParams.has('singbox')) 追加UA = 'singbox';
			else if (url.searchParams.has('surge')) 追加UA = 'surge';
			else if (url.searchParams.has('quanx')) 追加UA = 'Quantumult%20X';
			else if (url.searchParams.has('loon')) 追加UA = 'Loon';

			const 订阅链接数组 = [...new Set(urls)].filter(item => item?.trim?.()); // 去重
			if (订阅链接数组.length > 0) {
				const 请求订阅响应内容 = await getSUB(订阅链接数组, request, 追加UA, userAgentHeader);
				console.log(请求订阅响应内容);
				req_data += 请求订阅响应内容[0].join('\n');
				订阅转换URL += "|" + 请求订阅响应内容[1];
				if (订阅格式 == 'base64' && !isSubConverterRequest && 请求订阅响应内容[1].includes('://')) {
					subConverterUrl = `${subProtocol}://${subConverter}/sub?target=mixed&url=${encodeURIComponent(请求订阅响应内容[1])}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
					try {
						const subConverterResponse = await fetch(subConverterUrl, { headers: { 'User-Agent': 'v2rayN/CF-Workers-SUB  (https://github.com/cmliu/CF-Workers-SUB)' } });
						if (subConverterResponse.ok) {
							const subConverterContent = await subConverterResponse.text();
							req_data += '\n' + atob(subConverterContent);
						}
					} catch (error) {
						console.log('订阅转换请回base64失败，检查订阅转换后端是否正常运行');
					}
				}
			}

			if (env.WARP) 订阅转换URL += "|" + (await ADD(env.WARP)).join("|");
			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			//const text = String.fromCharCode.apply(null, encodedData);
			const utf8Decoder = new TextDecoder();
			const text = utf8Decoder.decode(encodedData);

			//去重
			const uniqueLines = new Set(text.split('\n'));
			const result = [...uniqueLines].join('\n');
			//console.log(result);

			let base64Data;
			try {
				base64Data = btoa(result);
			} catch (e) {
				function encodeBase64(data) {
					const binary = new TextEncoder().encode(data);
					let base64 = '';
					const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

					for (let i = 0; i < binary.length; i += 3) {
						const byte1 = binary[i];
						const byte2 = binary[i + 1] || 0;
						const byte3 = binary[i + 2] || 0;

						base64 += chars[byte1 >> 2];
						base64 += chars[((byte1 & 3) << 4) | (byte2 >> 4)];
						base64 += chars[((byte2 & 15) << 2) | (byte3 >> 6)];
						base64 += chars[byte3 & 63];
					}

					const padding = 3 - (binary.length % 3 || 3);
					return base64.slice(0, base64.length - padding) + '=='.slice(0, padding);
				}

				base64Data = encodeBase64(result)
			}

			// 构建响应头对象
			const responseHeaders = {
				"content-type": "text/plain; charset=utf-8",
				"Profile-Update-Interval": `${SUBUpdateTime}`,
				"Profile-web-page-url": request.url.includes('?') ? request.url.split('?')[0] : request.url,
				//"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
			};

			if (订阅格式 == 'base64' || token == fakeToken) {
				return new Response(base64Data, { headers: responseHeaders });
			} else if (订阅格式 == 'clash') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=clash&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'singbox') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=singbox&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'surge') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=surge&ver=4&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'quanx') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=quanx&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&udp=true`;
			} else if (订阅格式 == 'loon') {
				subConverterUrl = `${subProtocol}://${subConverter}/sub?target=loon&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false`;
			}
			//console.log(订阅转换URL);
			try {
				const subConverterResponse = await fetch(subConverterUrl, { headers: { 'User-Agent': userAgentHeader } });//订阅转换
				if (!subConverterResponse.ok) return new Response(base64Data, { headers: responseHeaders });
				let subConverterContent = await subConverterResponse.text();
				if (订阅格式 == 'clash') subConverterContent = await clashFix(subConverterContent);
				// 只有非浏览器订阅才会返回SUBNAME
				if (!userAgent.includes('mozilla')) responseHeaders["Content-Disposition"] = `attachment; filename*=utf-8''${encodeURIComponent(FileName)}`;
				return new Response(subConverterContent, { headers: responseHeaders });
			} catch (error) {
				return new Response(base64Data, { headers: responseHeaders });
			}
		}
	}
};

async function ADD(envadd) {
	var addtext = envadd.replace(/[	"'|\r\n]+/g, '\n').replace(/\n+/g, '\n');	// 替换为换行
	//console.log(addtext);
	if (addtext.charAt(0) == '\n') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length - 1) == '\n') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split('\n');
	//console.log(add);
	return add;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text;
}

async function sendMessage(type, ip, add_data = "") {
	if (BotToken !== '' && ChatID !== '') {
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}

		let url = "https://api.telegram.org/bot" + BotToken + "/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function MD5MD5(text) {
	const encoder = new TextEncoder();

	const firstPass = await crypto.subtle.digest('MD5', encoder.encode(text));
	const firstPassArray = Array.from(new Uint8Array(firstPass));
	const firstHex = firstPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	const secondPass = await crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27)));
	const secondPassArray = Array.from(new Uint8Array(secondPass));
	const secondHex = secondPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	return secondHex.toLowerCase();
}

function clashFix(content) {
	if (content.includes('wireguard') && !content.includes('remote-dns-resolve')) {
		let lines;
		if (content.includes('\r\n')) {
			lines = content.split('\r\n');
		} else {
			lines = content.split('\n');
		}

		let result = "";
		for (let line of lines) {
			if (line.includes('type: wireguard')) {
				const 备改内容 = `, mtu: 1280, udp: true`;
				const 正确内容 = `, mtu: 1280, remote-dns-resolve: true, udp: true`;
				result += line.replace(new RegExp(备改内容, 'g'), 正确内容) + '\n';
			} else {
				result += line + '\n';
			}
		}

		content = result;
	}
	return content;
}

async function proxyURL(proxyURL, url) {
	const URLs = await ADD(proxyURL);
	const fullURL = URLs[Math.floor(Math.random() * URLs.length)];

	// 解析目标 URL
	let parsedURL = new URL(fullURL);
	console.log(parsedURL);
	// 提取并可能修改 URL 组件
	let URLProtocol = parsedURL.protocol.slice(0, -1) || 'https';
	let URLHostname = parsedURL.hostname;
	let URLPathname = parsedURL.pathname;
	let URLSearch = parsedURL.search;

	// 处理 pathname
	if (URLPathname.charAt(URLPathname.length - 1) == '/') {
		URLPathname = URLPathname.slice(0, -1);
	}
	URLPathname += url.pathname;

	// 构建新的 URL
	let newURL = `${URLProtocol}://${URLHostname}${URLPathname}${URLSearch}`;

	// 反向代理请求
	let response = await fetch(newURL);

	// 创建新的响应
	let newResponse = new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: response.headers
	});

	// 添加自定义头部，包含 URL 信息
	//newResponse.headers.set('X-Proxied-By', 'Cloudflare Worker');
	//newResponse.headers.set('X-Original-URL', fullURL);
	newResponse.headers.set('X-New-URL', newURL);

	return newResponse;
}

async function getSUB(api, request, 追加UA, userAgentHeader) {
	if (!api || api.length === 0) {
		return [];
	} else api = [...new Set(api)]; // 去重
	let newapi = "";
	let 订阅转换URLs = "";
	let 异常订阅 = "";
	const controller = new AbortController(); // 创建一个AbortController实例，用于取消请求
	const timeout = setTimeout(() => {
		controller.abort(); // 2秒后取消所有请求
	}, 2000);

	try {
		// 使用Promise.allSettled等待所有API请求完成，无论成功或失败
		const responses = await Promise.allSettled(api.map(apiUrl => getUrl(request, apiUrl, 追加UA, userAgentHeader).then(response => response.ok ? response.text() : Promise.reject(response))));

		// 遍历所有响应
		const modifiedResponses = responses.map((response, index) => {
			// 检查是否请求成功
			if (response.status === 'rejected') {
				const reason = response.reason;
				if (reason && reason.name === 'AbortError') {
					return {
						status: '超时',
						value: null,
						apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
					};
				}
				console.error(`请求失败: ${api[index]}, 错误信息: ${reason.status} ${reason.statusText}`);
				return {
					status: '请求失败',
					value: null,
					apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
				};
			}
			return {
				status: response.status,
				value: response.value,
				apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
			};
		});

		console.log(modifiedResponses); // 输出修改后的响应数组

		for (const response of modifiedResponses) {
			// 检查响应状态是否为'fulfilled'
			if (response.status === 'fulfilled') {
				const content = await response.value || 'null'; // 获取响应的内容
				if (content.includes('proxies:')) {
					//console.log('Clash订阅: ' + response.apiUrl);
					订阅转换URLs += "|" + response.apiUrl; // Clash 配置
				} else if (content.includes('outbounds"') && content.includes('inbounds"')) {
					//console.log('Singbox订阅: ' + response.apiUrl);
					订阅转换URLs += "|" + response.apiUrl; // Singbox 配置
				} else if (content.includes('://')) {
					//console.log('明文订阅: ' + response.apiUrl);
					newapi += content + '\n'; // 追加内容
				} else if (isValidBase64(content)) {
					//console.log('Base64订阅: ' + response.apiUrl);
					newapi += base64Decode(content) + '\n'; // 解码并追加内容
				} else {
					const 异常订阅LINK = `trojan://CMLiussss@127.0.0.1:8888?security=tls&allowInsecure=1&type=tcp&headerType=none#%E5%BC%82%E5%B8%B8%E8%AE%A2%E9%98%85%20${response.apiUrl.split('://')[1].split('/')[0]}`;
					console.log('异常订阅: ' + 异常订阅LINK);
					异常订阅 += `${异常订阅LINK}\n`;
				}
			}
		}
	} catch (error) {
		console.error(error); // 捕获并输出错误信息
	} finally {
		clearTimeout(timeout); // 清除定时器
	}

	const 订阅内容 = await ADD(newapi + 异常订阅); // 将处理后的内容转换为数组
	// 返回处理后的结果
	return [订阅内容, 订阅转换URLs];
}

async function getUrl(request, targetUrl, 追加UA, userAgentHeader) {
	// 设置自定义 User-Agent
	const newHeaders = new Headers(request.headers);
	newHeaders.set("User-Agent", `${atob('djJyYXlOLzYuNDU=')} cmliu/CF-Workers-SUB ${追加UA}(${userAgentHeader})`);

	// 构建新的请求对象
	const modifiedRequest = new Request(targetUrl, {
		method: request.method,
		headers: newHeaders,
		body: request.method === "GET" ? null : request.body,
		redirect: "follow",
		cf: {
			// 忽略SSL证书验证
			insecureSkipVerify: true,
			// 允许自签名证书
			allowUntrusted: true,
			// 禁用证书验证
			validateCertificate: false
		}
	});

	// 输出请求的详细信息
	console.log(`请求URL: ${targetUrl}`);
	console.log(`请求头: ${JSON.stringify([...newHeaders])}`);
	console.log(`请求方法: ${request.method}`);
	console.log(`请求体: ${request.method === "GET" ? null : request.body}`);

	// 发送请求并返回响应
	return fetch(modifiedRequest);
}

function isValidBase64(str) {
	// 先移除所有空白字符(空格、换行、回车等)
	const cleanStr = str.replace(/\s/g, '');
	const base64Regex = /^[A-Za-z0-9+/=]+$/;
	return base64Regex.test(cleanStr);
}

async function 迁移地址列表(env, txt = 'ADD.txt') {
	const 旧数据 = await env.KV.get(`/${txt}`);
	const 新数据 = await env.KV.get(txt);

	if (旧数据 && !新数据) {
		// 写入新位置
		await env.KV.put(txt, 旧数据);
		// 删除旧数据
		await env.KV.delete(`/${txt}`);
		return true;
	}
	return false;
}

async function KV(request, env, txt = 'ADD.txt', guest) {
	const url = new URL(request.url);
	try {
		// POST请求处理
		if (request.method === "POST") {
			if (!env.KV) return new Response("未绑定KV空间", { status: 400 });
			try {
				const content = await request.text();
				await env.KV.put(txt, content);
				return new Response("保存成功");
			} catch (error) {
				console.error('保存KV时发生错误:', error);
				return new Response("保存失败: " + error.message, { status: 500 });
			}
		}

		// GET请求部分
		let content = '';
		let hasKV = !!env.KV;

		if (hasKV) {
			try {
				content = await env.KV.get(txt) || '';
			} catch (error) {
				console.error('读取KV时发生错误:', error);
				content = '读取数据时发生错误: ' + error.message;
			}
		}

		const html = `
			<!DOCTYPE html>
			<html>
				<head>
					<title>${FileName} 订阅编辑</title>
					<meta charset="utf-8">
					<meta name="viewport" content="width=device-width, initial-scale=1">
					<style>
						body {
							margin: 0;
							padding: 15px; /* 调整padding */
							box-sizing: border-box;
							font-size: 13px; /* 设置全局字体大小 */
						}
						.editor-container {
							width: 100%;
							max-width: 100%;
							margin: 0 auto;
						}
						.editor {
							width: 100%;
							height: 300px; /* 调整高度 */
							margin: 15px 0; /* 调整margin */
							padding: 10px; /* 调整padding */
							box-sizing: border-box;
							border: 1px solid #ccc;
							border-radius: 4px;
							font-size: 13px;
							line-height: 1.5;
							overflow-y: auto;
							resize: none;
						}
						.save-container {
							margin-top: 8px; /* 调整margin */
							display: flex;
							align-items: center;
							gap: 10px; /* 调整gap */
						}
						.save-btn, .back-btn {
							padding: 6px 15px; /* 调整padding */
							color: white;
							border: none;
							border-radius: 4px;
							cursor: pointer;
						}
						.save-btn {
							background: #4CAF50;
						}
						.save-btn:hover {
							background: #45a049;
						}
						.back-btn {
							background: #666;
						}
						.back-btn:hover {
							background: #555;
						}
						.save-status {
							color: #666;
						}
					</style>
					<script src="https://cdn.jsdelivr.net/npm/@keeex/qrcodejs-kx@1.0.2/qrcode.min.js"></script>
				</head>
				<body>
					################################################################<br>
					Subscribe / sub 订阅地址, 点击链接自动 <strong>复制订阅链接</strong> 并 <strong>生成订阅二维码</strong> <br>
					---------------------------------------------------------------<br>
					自适应订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?sub','qrcode_0')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}</a><br>
					<div id="qrcode_0" style="margin: 10px 10px 10px 10px;"></div>
					Base64订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?b64','qrcode_1')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?b64</a><br>
					<div id="qrcode_1" style="margin: 10px 10px 10px 10px;"></div>
					clash订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?clash','qrcode_2')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?clash</a><br>
					<div id="qrcode_2" style="margin: 10px 10px 10px 10px;"></div>
					singbox订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?sb','qrcode_3')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?sb</a><br>
					<div id="qrcode_3" style="margin: 10px 10px 10px 10px;"></div>
					surge订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?surge','qrcode_4')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?surge</a><br>
					<div id="qrcode_4" style="margin: 10px 10px 10px 10px;"></div>
					loon订阅地址:<br>
					<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?loon','qrcode_5')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/${mytoken}?loon</a><br>
					<div id="qrcode_5" style="margin: 10px 10px 10px 10px;"></div>
					&nbsp;&nbsp;<strong><a href="javascript:void(0);" id="noticeToggle" onclick="toggleNotice()">查看访客订阅∨</a></strong><br>
					<div id="noticeContent" class="notice-content" style="display: none;">
						---------------------------------------------------------------<br>
						访客订阅只能使用订阅功能，无法查看配置页！<br>
						GUEST（访客订阅TOKEN）: <strong>${guest}</strong><br>
						---------------------------------------------------------------<br>
						自适应订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}','guest_0')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}</a><br>
						<div id="guest_0" style="margin: 10px 10px 10px 10px;"></div>
						Base64订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&b64','guest_1')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&b64</a><br>
						<div id="guest_1" style="margin: 10px 10px 10px 10px;"></div>
						clash订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&clash','guest_2')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&clash</a><br>
						<div id="guest_2" style="margin: 10px 10px 10px 10px;"></div>
						singbox订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&sb','guest_3')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&sb</a><br>
						<div id="guest_3" style="margin: 10px 10px 10px 10px;"></div>
						surge订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&surge','guest_4')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&surge</a><br>
						<div id="guest_4" style="margin: 10px 10px 10px 10px;"></div>
						loon订阅地址:<br>
						<a href="javascript:void(0)" onclick="copyToClipboard('https://${url.hostname}/sub?token=${guest}&loon','guest_5')" style="color:blue;text-decoration:underline;cursor:pointer;">https://${url.hostname}/sub?token=${guest}&loon</a><br>
						<div id="guest_5" style="margin: 10px 10px 10px 10px;"></div>
					</div>
					---------------------------------------------------------------<br>
					################################################################<br>
					订阅转换配置<br>
					---------------------------------------------------------------<br>
					SUBAPI（订阅转换后端）: <strong>${subProtocol}://${subConverter}</strong><br>
					SUBCONFIG（订阅转换配置文件）: <strong>${subConfig}</strong><br>
					---------------------------------------------------------------<br>
					################################################################<br>
					${FileName} 汇聚订阅编辑: 
					<div class="editor-container">
						${hasKV ? `
						<textarea class="editor" 
							placeholder="${decodeURIComponent(atob('TElOSyVFNyVBNCVCQSVFNCVCRSU4QiVFRiVCQyU4OCVFNCVCOCU4MCVFOCVBMSU4QyVFNCVCOCU4MCVFNCVCOCVBQSVFOCU4QSU4MiVFNyU4MiVCOSVFOSU5MyVCRSVFNiU4RSVBNSVFNSU4RCVCMyVFNSU4RiVBRiVFRiVCQyU4OSVFRiVCQyU5QQp2bGVzcyUzQSUyRiUyRjI0NmFhNzk1LTA2MzctNGY0Yy04ZjY0LTJjOGZiMjRjMWJhZCU0MDEyNy4wLjAuMSUzQTEyMzQlM0ZlbmNyeXB0aW9uJTNEbm9uZSUyNnNlY3VyaXR5JTNEdGxzJTI2c25pJTNEVEcuQ01MaXVzc3NzLmxvc2V5b3VyaXAuY29tJTI2YWxsb3dJbnNlY3VyZSUzRDElMjZ0eXBlJTNEd3MlMjZob3N0JTNEVEcuQ01MaXVzc3NzLmxvc2V5b3VyaXAuY29tJTI2cGF0aCUzRCUyNTJGJTI1M0ZlZCUyNTNEMjU2MCUyM0NGbmF0CnRyb2phbiUzQSUyRiUyRmFhNmRkZDJmLWQxY2YtNGE1Mi1iYTFiLTI2NDBjNDFhNzg1NiU0MDIxOC4xOTAuMjMwLjIwNyUzQTQxMjg4JTNGc2VjdXJpdHklM0R0bHMlMjZzbmklM0RoazEyLmJpbGliaWxpLmNvbSUyNmFsbG93SW5zZWN1cmUlM0QxJTI2dHlwZSUzRHRjcCUyNmhlYWRlclR5cGUlM0Rub25lJTIzSEsKc3MlM0ElMkYlMkZZMmhoWTJoaE1qQXRhV1YwWmkxd2IyeDVNVE13TlRveVJYUlFjVzQyU0ZscVZVNWpTRzlvVEdaVmNFWlJkMjVtYWtORFVUVnRhREZ0U21SRlRVTkNkV04xVjFvNVVERjFaR3RTUzBodVZuaDFielUxYXpGTFdIb3lSbTgyYW5KbmRERTRWelkyYjNCMGVURmxOR0p0TVdwNlprTm1RbUklMjUzRCU0MDg0LjE5LjMxLjYzJTNBNTA4NDElMjNERQoKCiVFOCVBRSVBMiVFOSU5OCU4NSVFOSU5MyVCRSVFNiU4RSVBNSVFNyVBNCVCQSVFNCVCRSU4QiVFRiVCQyU4OCVFNCVCOCU4MCVFOCVBMSU4QyVFNCVCOCU4MCVFNiU5RCVBMSVFOCVBRSVBMiVFOSU5OCU4NSVFOSU5MyVCRSVFNiU4RSVBNSVFNSU4RCVCMyVFNSU4RiVBRiVFRiVCQyU4OSVFRiVCQyU5QQpodHRwcyUzQSUyRiUyRnN1Yi54Zi5mcmVlLmhyJTJGYXV0bw=='))}"
							id="content">${content}</textarea>
						<div class="save-container">
							<button class="save-btn" onclick="saveContent(this)">保存</button>
							<span class="save-status" id="saveStatus"></span>
						</div>
						` : '<p>请绑定 <strong>变量名称</strong> 为 <strong>KV</strong> 的KV命名空间</p>'}
					</div>
					<br>
					################################################################<br>
					${decodeURIComponent(atob('dGVsZWdyYW0lMjAlRTQlQkElQTQlRTYlQjUlODElRTclQkUlQTQlMjAlRTYlOEElODAlRTYlOUMlQUYlRTUlQTQlQTclRTQlQkQlQUMlN0UlRTUlOUMlQTglRTclQkElQkYlRTUlOEYlOTElRTclODklOEMhJTNDYnIlM0UKJTNDYSUyMGhyZWYlM0QlMjdodHRwcyUzQSUyRiUyRnQubWUlMkZDTUxpdXNzc3MlMjclM0VodHRwcyUzQSUyRiUyRnQubWUlMkZDTUxpdXNzc3MlM0MlMkZhJTNFJTNDYnIlM0UKLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJTNDYnIlM0UKZ2l0aHViJTIwJUU5JUExJUI5JUU3JTlCJUFFJUU1JTlDJUIwJUU1JTlEJTgwJTIwU3RhciFTdGFyIVN0YXIhISElM0NiciUzRQolM0NhJTIwaHJlZiUzRCUyN2h0dHBzJTNBJTJGJTJGZ2l0aHViLmNvbSUyRmNtbGl1JTJGQ0YtV29ya2Vycy1TVUIlMjclM0VodHRwcyUzQSUyRiUyRmdpdGh1Yi5jb20lMkZjbWxpdSUyRkNGLVdvcmtlcnMtU1VCJTNDJTJGYSUzRSUzQ2JyJTNFCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSUzQ2JyJTNFCiUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMyUyMw=='))}
					<br><br>UA: <strong>${request.headers.get('User-Agent')}</strong>
					<script>
					function copyToClipboard(text, qrcode) {
						navigator.clipboard.writeText(text).then(() => {
							alert('已复制到剪贴板');
						}).catch(err => {
							console.error('复制失败:', err);
						});
						const qrcodeDiv = document.getElementById(qrcode);
						qrcodeDiv.innerHTML = '';
						new QRCode(qrcodeDiv, {
							text: text,
							width: 220, // 调整宽度
							height: 220, // 调整高度
							colorDark: "#000000", // 二维码颜色
							colorLight: "#ffffff", // 背景颜色
							correctLevel: QRCode.CorrectLevel.Q, // 设置纠错级别
							scale: 1 // 调整像素颗粒度
						});
					}
						
					if (document.querySelector('.editor')) {
						let timer;
						const textarea = document.getElementById('content');
						const originalContent = textarea.value;
		
						function goBack() {
							const currentUrl = window.location.href;
							const parentUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
							window.location.href = parentUrl;
						}
		
						function replaceFullwidthColon() {
							const text = textarea.value;
							textarea.value = text.replace(/：/g, ':');
						}
						
						function saveContent(button) {
							try {
								const updateButtonText = (step) => {
									button.textContent = \`保存中: \${step}\`;
								};
								// 检测是否为iOS设备
								const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
								
								// 仅在非iOS设备上执行replaceFullwidthColon
								if (!isIOS) {
									replaceFullwidthColon();
								}
								updateButtonText('开始保存');
								button.disabled = true;

								// 获取textarea内容和原始内容
								const textarea = document.getElementById('content');
								if (!textarea) {
									throw new Error('找不到文本编辑区域');
								}

								updateButtonText('获取内容');
								let newContent;
								let originalContent;
								try {
									newContent = textarea.value || '';
									originalContent = textarea.defaultValue || '';
								} catch (e) {
									console.error('获取内容错误:', e);
									throw new Error('无法获取编辑内容');
								}

								updateButtonText('准备状态更新函数');
								const updateStatus = (message, isError = false) => {
									const statusElem = document.getElementById('saveStatus');
									if (statusElem) {
										statusElem.textContent = message;
										statusElem.style.color = isError ? 'red' : '#666';
									}
								};

								updateButtonText('准备按钮重置函数');
								const resetButton = () => {
									button.textContent = '保存';
									button.disabled = false;
								};

								if (newContent !== originalContent) {
									updateButtonText('发送保存请求');
									fetch(window.location.href, {
										method: 'POST',
										body: newContent,
										headers: {
											'Content-Type': 'text/plain;charset=UTF-8'
										},
										cache: 'no-cache'
									})
									.then(response => {
										updateButtonText('检查响应状态');
										if (!response.ok) {
											throw new Error(\`HTTP error! status: \${response.status}\`);
										}
										updateButtonText('更新保存状态');
										const now = new Date().toLocaleString();
										document.title = \`编辑已保存 \${now}\`;
										updateStatus(\`已保存 \${now}\`);
									})
									.catch(error => {
										updateButtonText('处理错误');
										console.error('Save error:', error);
										updateStatus(\`保存失败: \${error.message}\`, true);
									})
									.finally(() => {
										resetButton();
									});
								} else {
									updateButtonText('检查内容变化');
									updateStatus('内容未变化');
									resetButton();
								}
							} catch (error) {
								console.error('保存过程出错:', error);
								button.textContent = '保存';
								button.disabled = false;
								const statusElem = document.getElementById('saveStatus');
								if (statusElem) {
									statusElem.textContent = \`错误: \${error.message}\`;
									statusElem.style.color = 'red';
								}
							}
						}
		
						textarea.addEventListener('blur', saveContent);
						textarea.addEventListener('input', () => {
							clearTimeout(timer);
							timer = setTimeout(saveContent, 5000);
						});
					}

					function toggleNotice() {
						const noticeContent = document.getElementById('noticeContent');
						const noticeToggle = document.getElementById('noticeToggle');
						if (noticeContent.style.display === 'none' || noticeContent.style.display === '') {
							noticeContent.style.display = 'block';
							noticeToggle.textContent = '隐藏访客订阅∧';
						} else {
							noticeContent.style.display = 'none';
							noticeToggle.textContent = '查看访客订阅∨';
						}
					}
			
					// 初始化 noticeContent 的 display 属性
					document.addEventListener('DOMContentLoaded', () => {
						document.getElementById('noticeContent').style.display = 'none';
					});
					</script>
				</body>
			</html>
		`;

		return new Response(html, {
			headers: { "Content-Type": "text/html;charset=utf-8" }
		});
	} catch (error) {
		console.error('处理请求时发生错误:', error);
		return new Response("服务器错误: " + error.message, {
			status: 500,
			headers: { "Content-Type": "text/plain;charset=utf-8" }
		});
	}

}

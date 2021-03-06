package com.medal.weixin.sdk.message.response;

import com.medal.weixin.sdk.message.response.base.BaseMessageResp;
import lombok.Data;

/**
 * 回复视频消息
 *
 * <xml>
 <ToUserName><![CDATA[toUser]]></ToUserName>
 <FromUserName><![CDATA[fromUser]]></FromUserName>
 <CreateTime>12345678</CreateTime>
 <MsgType><![CDATA[video]]></MsgType>
 <Video>
 <MediaId><![CDATA[media_id]]></MediaId>
 <Title><![CDATA[title]]></Title>
 <Description><![CDATA[description]]></Description>
 </Video>
 </xml>

 * Created by xhuji on 2016/10/20.
 */
@Data
public class VideoMessageResp extends BaseMessageResp{
    /**
     * 视频
     */
    private Video video;
}

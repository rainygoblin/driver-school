package com.drivers.router.web.response;

import lombok.Data;

/**
 * Title:
 * Description:
 * Copyright: Copyright (c) 2012
 * Company: shishike Technology(Beijing) Chengdu Co. Ltd.
 *
 * @author xiejinjun
 * @version 1.0 2016/9/18
 */
@Data
public class StatisticsCadetNumResp {
    /**
     * 时间段
     */
    private String times;
    /**
     * 人数
     */
    private Long totalNum;
}

<?php
/**
 * @author: liaofei<136327134@qq.com>
 * @day: 2020/6/30
 */

namespace app\model\system;

use crmeb\basic\BaseModel;
use crmeb\traits\ModelTrait;
use think\Model;

/**
 * 系统等级设置模型
 * Class SystemUserLevel
 * @package app\model\system
 */
class SystemUserLevel extends BaseModel
{
    use ModelTrait;

    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'system_user_level';

    /**
     * 时间获取器
     * @param $value
     * @return false|string
     */
    public function getAddTimeAttr($value)
    {
        return date('Y-m-d H:i:s', (int)$value);
    }

    /**
     * 优惠比例获取器
     * @param $value
     * @return int
     */
    public function getDiscountAttr($value)
    {
        return (int)$value;
    }

    /**
     * 是否展示
     * @param \think\Model $query
     * @param $value
     */
    public function searchIsShowAttr($query, $value)
    {
        $query->where('is_show',$value);
    }

    /**
     * 是否删除搜索器
     * @param Model $query
     * @param $value
     * @param $data
     */
    public function searchIsDelAttr($query, $value)
    {
        $query->where('is_del', $value ?? 0);
    }

    /**
     * @param Model $query
     * @param $value
     */
    public function searchTitleAttr($query, $value)
    {
        $query->where('title','LIKE', "%$value%");
    }

}
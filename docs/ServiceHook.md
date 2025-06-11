# ServiceHook

ServiceHook 对象

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Action** | **string** | 发送类型 | [optional] [default to '']
**ActionLabel** | **string** | 发送类型描述 | [optional] [default to '']
**ActionProperties** | **string** | 发送行为属性 | [optional] [default to '']
**CreatedAt** | **number** | 创建时间 | [optional] [default to undefined]
**CreatorBy** | **number** | 创建者编号 | [optional] [default to undefined]
**CreatorByUser** | [**ServiceHookUser**](ServiceHookUser.md) |  | [optional] [default to undefined]
**Enabled** | **boolean** | 事件开关 | [optional] [default to false]
**Event** | **Array&lt;string&gt;** | 事件列表 | [optional] [default to undefined]
**EventLabel** | **Array&lt;string&gt;** | 事件描述列表 | [optional] [default to undefined]
**FilterProperties** | **string** | 过滤器属性 | [optional] [default to '']
**Id** | **string** | Service Hook 编号 | [optional] [default to '']
**LastSucceedAt** | **number** | 最近发送成功时间 | [optional] [default to undefined]
**Name** | **string** | Service Hook 名称 | [optional] [default to '']
**Service** | **string** | 服务类型 | [optional] [default to '']
**ServiceName** | **string** | 服务名 | [optional] [default to '']
**Status** | **number** | 发送状态 | [optional] [default to undefined]
**TargetId** | **number** | 目标数据编号 | [optional] [default to undefined]
**TargetType** | **string** | 目标数据类型：Project、Team,Space,Program | [optional] [default to '']
**UpdatedAt** | **number** | 更新时间 | [optional] [default to undefined]
**UpdatedBy** | **number** | 更新者编号 | [optional] [default to undefined]
**UpdatedByUser** | [**ServiceHookUser**](ServiceHookUser.md) |  | [optional] [default to undefined]
**Version** | **number** | 版本 | [optional] [default to undefined]

## Example

```typescript
import { ServiceHook } from './api';

const instance: ServiceHook = {
    Action,
    ActionLabel,
    ActionProperties,
    CreatedAt,
    CreatorBy,
    CreatorByUser,
    Enabled,
    Event,
    EventLabel,
    FilterProperties,
    Id,
    LastSucceedAt,
    Name,
    Service,
    ServiceName,
    Status,
    TargetId,
    TargetType,
    UpdatedAt,
    UpdatedBy,
    UpdatedByUser,
    Version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

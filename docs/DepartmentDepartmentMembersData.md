# DepartmentDepartmentMembersData

部门成员信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Allowed** | **boolean** | 是否授权 实际表示已加入或已被授权，如果要表示 已授权未加入(allowed &amp;&amp; userId&gt;0) | [default to false]
**Avatar** | **string** | 头像 | [default to '']
**Locked** | **boolean** | 是否被锁定 | [default to false]
**Name** | **string** | 成员名 | [default to '']
**Owner** | **boolean** | 是否部门所有者 | [default to false]
**RefId** | **number** | 部门用户的refId | [default to 0]
**Refs** | [**Array&lt;DepartmentDepartmentMemberRef&gt;**](DepartmentDepartmentMemberRef.md) | 关联的 部门等信息 | [default to undefined]
**ThirdPartyAvatar** | **string** | 三方头像 | [default to '']
**ThirdPartyName** | **string** | 三方名 | [default to '']
**UserGlobalKey** | **string** | 用户GK | [default to '']
**UserId** | **number** | 用户ID | [default to 0]
**UserStatus** | **number** | 用户状态 0不活跃，1活跃，-1被锁定，-2锁定登录，-3退出团队 | [default to UserStatusEnum_NUMBER_0]

## Example

```typescript
import { DepartmentDepartmentMembersData } from './api';

const instance: DepartmentDepartmentMembersData = {
    Allowed,
    Avatar,
    Locked,
    Name,
    Owner,
    RefId,
    Refs,
    ThirdPartyAvatar,
    ThirdPartyName,
    UserGlobalKey,
    UserId,
    UserStatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

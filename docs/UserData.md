# UserData

用户成员信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Avatar** | **string** | 头像 | [optional] [default to '']
**Email** | **string** | 邮箱 | [optional] [default to '']
**EmailValidation** | **number** | 邮箱是否验证 0 否 /1 是 | [optional] [default to undefined]
**GlobalKey** | **string** | 用户 GK | [optional] [default to '']
**Id** | **number** | 用户Id | [optional] [default to undefined]
**Name** | **string** | 用户名 | [optional] [default to '']
**NamePinYin** | **string** | 用户名拼音 | [optional] [default to '']
**Phone** | **string** | 手机号 | [optional] [default to '']
**PhoneValidation** | **number** | 手机是否验证 0 否 /1 是 | [optional] [default to undefined]
**Roles** | [**Array&lt;Role&gt;**](Role.md) | 用户组 | [optional] [default to undefined]
**Status** | **number** | 用户状态 0不活跃，1活跃，-1被锁定，-2锁定登录，-3退出团队 | [optional] [default to undefined]
**TeamId** | **number** | 团队Id | [optional] [default to 0]
**DepartmentMember** | [**ProjectMemberDepartmentMember**](ProjectMemberDepartmentMember.md) |  | [optional] [default to undefined]
**UniqueExtField** | **string** | 团队用户扩展字段、唯一。非必填 | [optional] [default to '']

## Example

```typescript
import { UserData } from './api';

const instance: UserData = {
    Avatar,
    Email,
    EmailValidation,
    GlobalKey,
    Id,
    Name,
    NamePinYin,
    Phone,
    PhoneValidation,
    Roles,
    Status,
    TeamId,
    DepartmentMember,
    UniqueExtField,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

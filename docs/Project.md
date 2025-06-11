# Project

项目信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Archived** | **boolean** | 是否压缩 | [optional] [default to false]
**CreatedAt** | **number** | 创建时间 | [optional] [default to undefined]
**Description** | **string** | 描述 | [optional] [default to '']
**DisplayName** | **string** | 显示名称 | [optional] [default to '']
**EndDate** | **number** | 项目结束时间 | [optional] [default to undefined]
**Icon** | **string** | 图标 | [optional] [default to '']
**Id** | **number** | 项目 ID | [optional] [default to undefined]
**IsDemo** | **boolean** | 是否为模板项目 | [optional] [default to false]
**MaxMember** | **number** | 最大团员数 | [optional] [default to undefined]
**Name** | **string** | 名称 | [optional] [default to '']
**StartDate** | **number** | 项目开始时间 | [optional] [default to undefined]
**Status** | **number** | 状态 默认都为1 | [optional] [default to undefined]
**TeamId** | **number** | 团队 ID | [optional] [default to undefined]
**TeamOwnerId** | **number** | 团队所有者 ID | [optional] [default to undefined]
**Type** | **number** | 项目类型, 项目集为0，公开项目为1，私密项目为2 | [optional] [default to undefined]
**UpdatedAt** | **number** | 更新时间 | [optional] [default to undefined]
**UserOwnerId** | **number** | 个人所有者 ID | [optional] [default to undefined]
**ProgramIds** | **Array&lt;number&gt;** | 项目集id | [optional] [default to undefined]

## Example

```typescript
import { Project } from './api';

const instance: Project = {
    Archived,
    CreatedAt,
    Description,
    DisplayName,
    EndDate,
    Icon,
    Id,
    IsDemo,
    MaxMember,
    Name,
    StartDate,
    Status,
    TeamId,
    TeamOwnerId,
    Type,
    UpdatedAt,
    UserOwnerId,
    ProgramIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# ConfigTemplate

模版

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | **number** | 配置方案Code  | [optional] [default to undefined]
**CooperateMode** | **string** | 配置方案协作类型，包括 SCRUM 和 CLASSIC  | [optional] [default to '']
**CreatedAt** | **number** | 创建时间 | [optional] [default to undefined]
**Description** | **string** | 配置方案描述  | [optional] [default to '']
**Id** | **number** | 配置方案ID | [optional] [default to undefined]
**IsDraft** | **boolean** | 是否是草稿配置方案  | [optional] [default to false]
**IsSystem** | **boolean** | 是否是系统配置方案  | [optional] [default to false]
**Name** | **string** | 配置方案名字  | [optional] [default to '']
**NameType** | **string** | 配置方案名字，取值和CooperateMode字段一样  | [optional] [default to '']
**RelatedProjects** | **number** | 关联项目id  | [optional] [default to undefined]
**Scope** | **string** | 配置方案类型，和入参的TemplateType取值一样  | [optional] [default to '']
**TeamId** | **number** | 团队ID | [optional] [default to undefined]
**UpdatedAt** | **number** | 更新时间 | [optional] [default to undefined]

## Example

```typescript
import { ConfigTemplate } from './api';

const instance: ConfigTemplate = {
    Code,
    CooperateMode,
    CreatedAt,
    Description,
    Id,
    IsDraft,
    IsSystem,
    Name,
    NameType,
    RelatedProjects,
    Scope,
    TeamId,
    UpdatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

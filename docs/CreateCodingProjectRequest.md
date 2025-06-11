# CreateCodingProjectRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | **string** | 项目描述 | [optional] [default to undefined]
**DisplayName** | **string** | 项目名称 | [default to undefined]
**Icon** | **string** | 项目图标 | [optional] [default to undefined]
**Name** | **string** | 项目标识 | [default to undefined]
**ProjectTemplate** | **string** | 项目模版 CODE_HOST 代码托管项目， PROJECT_MANAGE 项目管理项目， DEV_OPS DevOps项目， DEMO_BEGIN 范例项目 | [default to undefined]
**Shared** | **number** | 0： 不公开 1：公开源代码 | [default to undefined]

## Example

```typescript
import { CreateCodingProjectRequest } from './api';

const instance: CreateCodingProjectRequest = {
    Description,
    DisplayName,
    Icon,
    Name,
    ProjectTemplate,
    Shared,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

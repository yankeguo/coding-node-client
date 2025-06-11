# CreateCodingCIJobByTeamTemplateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 描述信息 | [optional] [default to 0]
**DepotType** | **string** | 仓库类型 | [optional] [default to undefined]
**JobName** | **string** | 构建计划名称 | [optional] [default to '']
**ProjectId** | **number** | 项目 ID | [optional] [default to 0]
**TemplateId** | **number** | 团队构建模版 ID | [optional] [default to 0]

## Example

```typescript
import { CreateCodingCIJobByTeamTemplateRequest } from './api';

const instance: CreateCodingCIJobByTeamTemplateRequest = {
    DepotId,
    DepotType,
    JobName,
    ProjectId,
    TemplateId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

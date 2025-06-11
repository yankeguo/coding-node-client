# ModifyTestRunRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssignedToId** | **number** | 处理人 ID | [optional] [default to undefined]
**Cases** | **Array&lt;number&gt;** | 包含的用例 ID 列表，IncludeAll&#x3D;false 必填 | [optional] [default to undefined]
**ConfigEnvironmentId** | **number** | 环境标识 | [optional] [default to undefined]
**Description** | **string** | 描述 | [optional] [default to undefined]
**ExecuteType** | **number** | 执行类型：1-手动执行 2-自动化流水线执行 | [optional] [default to undefined]
**GitDepotId** | **number** | 项目代码库 ID | [optional] [default to undefined]
**GitReleaseId** | **number** | 发布版本 ID | [optional] [default to undefined]
**IncludeAll** | **boolean** | 是否包含全部用例 | [optional] [default to undefined]
**Name** | **string** | 标题 | [optional] [default to undefined]
**ProjectName** | **string** | 项目名称 | [optional] [default to undefined]
**RunId** | **number** | 计划 ID | [optional] [default to undefined]
**SectionId** | **number** | 分组 ID | [optional] [default to undefined]

## Example

```typescript
import { ModifyTestRunRequest } from './api';

const instance: ModifyTestRunRequest = {
    AssignedToId,
    Cases,
    ConfigEnvironmentId,
    Description,
    ExecuteType,
    GitDepotId,
    GitReleaseId,
    IncludeAll,
    Name,
    ProjectName,
    RunId,
    SectionId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

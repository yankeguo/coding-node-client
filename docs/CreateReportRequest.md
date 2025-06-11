# CreateReportRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttachmentIds** | **Array&lt;number&gt;** | 附件 ID 数组：来自“生成附件预上传信息”接口 | [optional] [default to undefined]
**Name** | **string** | 测试报告标题 | [default to undefined]
**ProjectName** | **string** | 项目名称 | [default to undefined]
**RunIds** | **Array&lt;number&gt;** | 测试计划 ID 数组 | [default to undefined]

## Example

```typescript
import { CreateReportRequest } from './api';

const instance: CreateReportRequest = {
    AttachmentIds,
    Name,
    ProjectName,
    RunIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
